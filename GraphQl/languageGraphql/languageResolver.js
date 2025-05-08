const continents = [
    {
        id:"1",
        name:"asia",
        countries:[
            {
                id:"1",
                name:"India",
                languages:[
                    {
                        id:"1",
                        name:"eng"
                    },
                    {
                        id:"2",
                        name:"mar"
                    },
                    {
                        id:"3",
                        name:"hin"
                    },
                ]
            },
            {
                id:"2",
                name:"Russia",
                languages:[
                    {
                        id:"1",
                        name:"rs"
                    }
                ]
            },
            {
                id:"3",
                name:"China",
                languages:[
                    {
                        id:"1",
                        name:"chn"
                    }
                ]
            }
        ]
    },
    {
        id:"2",
        name:"Europe",
        countries:[
            {
                id:"1",
                name:"UK",
                languages:[
                    {
                        id:"1",
                        name:"eng"
                    }
                ]
            },
            {
                id:"2",
                name:"Portugal",
                languages:[
                    {
                        id:"1",
                        name:"porto"
                    }
                ]
            }
        ]
    }
]

export const languageResolvers = {
    Query: {
        continents:(parent, args, context , info) => {
            return continents;
        },
        countries: (parent, args, context, info) => {
            let continentId = args.id;

            let country = continents.find(continent => continentId === continent.id);
            return country;
        }
    },
    Mutation:{
        addLanguage:(parent, args)=>{
            let continent = continents.find(c=>args.continentId === c.id);
            let country = continent.countries.find(con => con.id === args.countryId);
            let languagesLength = country.languages.length
            country.languages.push({
                id:`${languagesLength + 1}`,
                name:args.languageToAdd
            })
            return country
        }
    }
}