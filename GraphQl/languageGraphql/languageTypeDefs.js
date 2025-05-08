export const languageTypeDefs = `

    type Continent {
      id: ID!
      name: String
      countries: [Country]
    }

    type Country {
      id: ID!
      name: String
      languages: [Language]
    }

    type Language {
      id: ID!
      name: String
    }

    type Query {
      continents: [Continent]
      countries(id: ID!): Country
    }

    type Mutation {
      addLanguage(continentId:ID!,countryId:ID!,languageToAdd:String):Country
    }
        
`;