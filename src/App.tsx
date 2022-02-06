import React, { useState } from 'react';
import {
    Grommet,
    Box,
    Button,
    Heading,
    Collapsible,
    ResponsiveContext,
    Layer
} from 'grommet';
import {
    FormClose,
    Notification
} from 'grommet-icons';

const theme = {
  global: {
    colors: {
        brand: '#ff00ff'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
  }
};

// https://github.com/grommet/grommet-starter-new-app

const AppBar = (props :Object) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
    />
);

function App() {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <Grommet theme={theme} themeMode='dark' full>
            <ResponsiveContext.Consumer>
                {size => (
                    <Box fill>
                        <AppBar>
                            <Heading level='3' margin='none'>My App</Heading>
                            <Button icon={<Notification />} onClick={() => setShowSidebar(!showSidebar)} />
                        </AppBar>
                        <Box
                            direction = 'row'
                            flex
                            overflow={{ horizontal: 'hidden' }}
                        >
                            <Box
                                flex
                                align='center'
                                justify='center'
                            >
                                app body
                            </Box>
                            {(!showSidebar || size !== 'small') ? (
                                <Collapsible
                                    direction='horizontal'
                                    open={showSidebar}
                                >
                                    <Box
                                        flex
                                        width='medium'
                                        background='light-2'
                                        elevation='small'
                                        align='center'
                                        justify='center'
                                    >
                                        sidebar
                                    </Box>
                                </Collapsible>
                            ) : (
                                <Layer>
                                    <Box
                                        background='light-2'
                                        tag='header'
                                        justify='end'
                                        align='center'
                                        direction='row'
                                    >
                                        <Button
                                            icon={<FormClose />}
                                            onClick={() => setShowSidebar(false)}
                                        />
                                    </Box>
                                    <Box
                                        fill
                                        background='light-2'
                                        align='center'
                                        justify='center'
                                    >
                                        sidebar
                                    </Box>
                                </Layer>
                            )}
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    );
}

export default App;