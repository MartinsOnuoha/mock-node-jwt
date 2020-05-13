const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
  return res.json({
    error: false,
    msg: 'welcome, unrestricted route'
  })
})

app.post('/auth', (req, res) => {

  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({
      error: true,
      msg: 'provide a username and password'
    });
  }
  // generate a token
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A'

  return res.json({
    error: false,
    msg: 'authenticated',
    user: {
      token,
      username
    }
  })
})
app.get('/restricted', (req, res) => {
  const tokenA = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A'
  const { authorization } = req.headers;
  const token = authorization.substr(7);
  if (!token) {
    return res.json({
      error: true,
      msg: 'provide an auth token',
    })
  }
  if (tokenA !== token) {
    return res.json({
      error: true,
      msg: 'token mismatch'
    })
  }
  return res.json({
    error: false,
    msg: 'success!! welcome to protected route'
  });
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
