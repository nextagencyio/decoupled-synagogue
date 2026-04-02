// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Programs
export const GET_PROGRAMS = gql`
  query GetPrograms($first: Int = 20) {
    nodePrograms(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeProgram {
          body {
            processed
            summary
          }
          programType {
            ... on TermInterface {
              id
              name
            }
          }
          leader
          schedule
          location
          ageGroup
          registrationUrl
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_PROGRAM_BY_PATH = gql`
  query GetProgramByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeProgram {
            id
            title
            path
            body {
              processed
            }
            programType {
              ... on TermInterface {
                id
                name
              }
            }
            leader
            schedule
            location
            ageGroup
            registrationUrl
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Service Times
export const GET_SERVICE_TIMES = gql`
  query GetServiceTimes($first: Int = 20) {
    nodeServiceTimes(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeServiceTime {
          body {
            processed
          }
          serviceName
          dayOfWeek
          startTime
          endTime
          serviceStyle
          notes {
            processed
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_SERVICE_TIME_BY_PATH = gql`
  query GetServiceTimeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeServiceTime {
            id
            title
            path
            body {
              processed
            }
            serviceName
            dayOfWeek
            startTime
            endTime
            serviceStyle
            notes {
              processed
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Events
export const GET_EVENTS = gql`
  query GetEvents($first: Int = 20) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          body {
            processed
            summary
          }
          eventDate {
            timestamp
          }
          endDate {
            timestamp
          }
          location
          eventCategory {
            ... on TermInterface {
              id
              name
            }
          }
          speaker
          registrationUrl
          cost
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventCategory {
              ... on TermInterface {
                id
                name
              }
            }
            speaker
            registrationUrl
            cost
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// News
export const GET_NEWS = gql`
  query GetNews($first: Int = 20) {
    nodeNewsItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeNews {
          body {
            processed
            summary
          }
          newsCategory {
            ... on TermInterface {
              id
              name
            }
          }
          publishDate {
            timestamp
          }
          author
          summary {
            processed
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_NEWS_BY_PATH = gql`
  query GetNewsByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeNews {
            id
            title
            path
            body {
              processed
            }
            newsCategory {
              ... on TermInterface {
                id
                name
              }
            }
            publishDate {
              timestamp
            }
            author
            summary {
              processed
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeProgram {
            id
            title
            path
            body {
              processed
            }
            programType {
              ... on TermInterface {
                id
                name
              }
            }
            leader
            schedule
            location
            ageGroup
            registrationUrl
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeServiceTime {
            id
            title
            path
            body {
              processed
            }
            serviceName
            dayOfWeek
            startTime
            endTime
            serviceStyle
            notes {
              processed
            }
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventCategory {
              ... on TermInterface {
                id
                name
              }
            }
            speaker
            registrationUrl
            cost
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeNews {
            id
            title
            path
            body {
              processed
            }
            newsCategory {
              ... on TermInterface {
                id
                name
              }
            }
            publishDate {
              timestamp
            }
            author
            summary {
              processed
            }
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured programs for homepage (limit to 3)
export const GET_FEATURED_PROGRAMS = gql`
  query GetFeaturedPrograms {
    nodePrograms(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeProgram {
          programType {
            ... on TermInterface {
              id
              name
            }
          }
          leader
          schedule
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Upcoming events for homepage
export const GET_UPCOMING_EVENTS = gql`
  query GetUpcomingEvents {
    nodeEvents(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          eventDate {
            timestamp
          }
          location
          eventCategory {
            ... on TermInterface {
              id
              name
            }
          }
          cost
        }
      }
    }
  }
`

// Featured news for homepage
export const GET_FEATURED_NEWS = gql`
  query GetFeaturedNews {
    nodeNewsItems(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeNews {
          summary {
            processed
          }
          publishDate {
            timestamp
          }
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          newsCategory {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`
