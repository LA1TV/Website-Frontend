let usersLa1tvApiKey

beforeAll(() => {
  usersLa1tvApiKey = process.env.LA1TV_API_KEY

  process.env.LA1TV_API_KEY = 'someApiKey'
})

beforeEach(() => {
  process.env.LA1TV_API_KEY = 'someApiKey'
})

afterAll(() => {
  process.env.LA1TV_API_KEY = usersLa1tvApiKey
})
