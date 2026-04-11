export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const username = process.env.GITHUB_USERNAME || "DeepakErothi1826"
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    // Return mock data when no token is available
    const mockWeeks = generateMockContributions()
    return new Response(
      JSON.stringify({
        total: mockWeeks.reduce((sum, w) => sum + w.contributionDays.reduce((s, d) => s + d.contributionCount, 0), 0),
        calendar: { weeks: mockWeeks },
      }),
      {
        status: 200,
        headers: { "content-type": "application/json" },
      }
    )
  }

  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              firstDay
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { login: username } }),
    cache: "no-store",
  })

  if (!res.ok) {
    const text = await res.text()
    // Return mock data on API error
    const mockWeeks = generateMockContributions()
    return new Response(
      JSON.stringify({
        total: mockWeeks.reduce((sum, w) => sum + w.contributionDays.reduce((s, d) => s + d.contributionCount, 0), 0),
        calendar: { weeks: mockWeeks },
      }),
      {
        status: 200,
        headers: { "content-type": "application/json" },
      }
    )
  }

  const json = await res.json()
  const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar

  return new Response(
    JSON.stringify({
      total: calendar?.totalContributions ?? 0,
      calendar: { weeks: calendar?.weeks ?? [] },
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store",
      },
    }
  )
}

function generateMockContributions() {
  const weeks = []
  const today = new Date()
  
  for (let w = 0; w < 52; w++) {
    const weekDays = []
    for (let d = 0; d < 7; d++) {
      const date = new Date(today)
      date.setDate(date.getDate() - (51 - w) * 7 - (6 - d))
      const count = Math.floor(Math.random() * 8)
      weekDays.push({
        date: date.toISOString().split("T")[0],
        contributionCount: count,
      })
    }
    weeks.push({
      firstDay: weekDays[0].date,
      contributionDays: weekDays,
    })
  }
  return weeks
}
