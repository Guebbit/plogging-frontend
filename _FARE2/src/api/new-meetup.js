// /api/new-meetup
// POST /api/new-meetup

async function handler(req, {method, body, status}) {
  if (method === 'POST') {
    console.log("SEND DATA", body)
    Promise.resolve()
      .then(() => {
        status(201).json({ message: 'Meetup inserted!' });
      });
  }
}

export default handler;
