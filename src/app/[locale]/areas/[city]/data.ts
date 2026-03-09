export type CityData = {
    slug: string;
    name: string;
    county: string;
    description: string;
    localNote: string;
    homeStyle: string;
    population: string;
    zipCodes: string[];
    nearbyAreas: string[];
};

export const cities: CityData[] = [
    {
        slug: "kissimmee",
        name: "Kissimmee",
        county: "Osceola County",
        description: "Kissimmee's rapidly growing residential neighborhoods and warm, humid climate make soffit maintenance critical. Many homes built in the 1990s–2000s during the tourism boom have original aluminum or wood soffit that is now due for inspection or replacement.",
        localNote: "Kissimmee sits just south of Orlando with a high concentration of homes in the $250K–$450K range. Storm seasons regularly damage soffit on single-story homes throughout communities like Flora Vista, Tuscan Hills, and Bellalago.",
        homeStyle: "Single-family residential, many 1-story ranch homes and newer 2-story communities",
        population: "~80,000",
        zipCodes: ["34741", "34742", "34743", "34744", "34746", "34747"],
        nearbyAreas: ["St. Cloud", "Celebration", "Poinciana", "Buenaventura Lakes"],
    },
    {
        slug: "winter-park",
        name: "Winter Park",
        county: "Orange County",
        description: "Winter Park is one of Orlando's most established and affluent communities, with many homes dating to the 1950s–1980s. These older homes frequently have original wood soffits and fascia that are long overdue for aluminum or vinyl replacement due to decades of Florida humidity.",
        localNote: "The tree-lined streets of Winter Park, combined with the city's older housing stock, create ideal conditions for soffit rot and pest intrusion. We see a high volume of soffit replacement jobs here, particularly around Via Tuscany, the Vias neighborhood, and along Lakemont Ave.",
        homeStyle: "Older single-family homes, many with large overhangs and wood original soffit",
        population: "~31,000",
        zipCodes: ["32789", "32790", "32792"],
        nearbyAreas: ["Maitland", "Casselberry", "Eatonville", "Orlando (north)"],
    },
    {
        slug: "sanford",
        name: "Sanford",
        county: "Seminole County",
        description: "Sanford's historic downtown and expanding residential neighborhoods north of Orlando make it a growing service area. Older properties near the lakefront frequently need soffit and fascia upgrades due to the combination of age and Florida's coastal-like humidity.",
        localNote: "Sanford is seeing rapid growth with new residential developments alongside its established historic neighborhoods. Both new construction (requiring first-time installation) and older homes needing replacement are common job types here.",
        homeStyle: "Mix of historic homes near downtown and newer subdivisions in northern Sanford",
        population: "~63,000",
        zipCodes: ["32771", "32773"],
        nearbyAreas: ["Lake Mary", "Oviedo", "DeBary", "Geneva"],
    },
    {
        slug: "clermont",
        name: "Clermont",
        county: "Lake County",
        description: "Clermont's hilly terrain and rapidly growing community west of Orlando is one of Central Florida's fastest-growing cities. New construction communities and established neighborhoods throughout the area regularly need soffit and fascia work.",
        localNote: "Clermont's many newer subdivisions built in the 2000s–2010s are now reaching the age where soffit panels start to show wear. The elevated terrain also means homes are more exposed to wind during storm season.",
        homeStyle: "Newer single-family subdivisions, many 1-story and 2-story homes built 2000–2015",
        population: "~50,000",
        zipCodes: ["34711", "34714", "34715"],
        nearbyAreas: ["Minneola", "Groveland", "Montverde", "Winter Garden"],
    },
    {
        slug: "winter-garden",
        name: "Winter Garden",
        county: "Orange County",
        description: "Winter Garden has transformed from a small citrus town into one of Orlando's most desirable suburbs. The mix of historic downtown homes and modern developments means we handle both soffit replacement on older properties and new construction installation in newer communities.",
        localNote: "Winter Garden's historic district has many older homes with wood original soffit in need of aluminum or vinyl replacement. Newer communities like Stoneybrook West and Waterleigh regularly request soffit installation for new construction.",
        homeStyle: "Historic downtown homes + large new master-planned communities",
        population: "~45,000",
        zipCodes: ["34787"],
        nearbyAreas: ["Ocoee", "Windermere", "Horizon West", "Clermont"],
    },
    {
        slug: "oviedo",
        name: "Oviedo",
        county: "Seminole County",
        description: "Oviedo is an upscale community northeast of Orlando known for excellent schools and well-maintained homes. Homeowners here are typically proactive about maintenance — we see a mix of scheduled soffit replacements on 20-year-old homes and repair calls from storm damage.",
        localNote: "Many Oviedo subdivisions built in the 1990s–early 2000s are now prime candidates for soffit replacement. Communities like Alafaya Woods, Carillon, and Twin Rivers consistently generate service requests.",
        homeStyle: "Upper-middle-class single-family homes, many 2-story, built 1990s–2005",
        population: "~42,000",
        zipCodes: ["32765", "32766"],
        nearbyAreas: ["Chuluota", "Alafaya", "Waterford Lakes", "Sanford"],
    },
    {
        slug: "apopka",
        name: "Apopka",
        county: "Orange County",
        description: "Apopka, northwest of Orlando, is one of the area's fastest-growing communities with extensive new residential development. We handle both new construction soffit installation for builders and replacement jobs on the city's older housing stock.",
        localNote: "Apopka's expansion along State Road 429 is creating significant new construction demand. Established neighborhoods closer to downtown Apopka have homes from the 1970s–1990s frequently needing full soffit replacement.",
        homeStyle: "Mix of older established homes and large new residential developments",
        population: "~57,000",
        zipCodes: ["32703", "32712"],
        nearbyAreas: ["Wekiwa Springs", "Zellwood", "Mount Dora", "Longwood"],
    },
    {
        slug: "lake-mary",
        name: "Lake Mary",
        county: "Seminole County",
        description: "Lake Mary is one of Seminole County's most affluent communities, with a high concentration of executive homes and master-planned developments. Homeowners here expect premium quality and fast service — we deliver both.",
        localNote: "Lake Mary's upscale communities like Heathrow, Timacuan Golf & Country Club, and The Crossings feature larger homes with more linear footage of soffit and fascia. These jobs tend to be more comprehensive and homeowners invest in aluminum for longevity.",
        homeStyle: "Upscale executive homes, many large 2-story with significant overhang",
        population: "~16,000",
        zipCodes: ["32746"],
        nearbyAreas: ["Heathrow", "Longwood", "Sanford", "Debary"],
    },
    {
        slug: "altamonte-springs",
        name: "Altamonte Springs",
        county: "Seminole County",
        description: "Altamonte Springs, a dense inner-ring suburb of Orlando, has a large concentration of homes built in the 1970s–1990s that frequently need full soffit and fascia replacement. Its central location makes it one of our highest-volume service areas.",
        localNote: "The established neighborhoods of Altamonte Springs — Altamonte Landing, Spring Valley, Forest City — consistently generate soffit replacement demand. These older homes often have original aluminum that has reached end-of-life, or original wood that deteriorated long ago.",
        homeStyle: "Established single-family neighborhoods, many ranch-style from 1970s–1990s",
        population: "~44,000",
        zipCodes: ["32701", "32714"],
        nearbyAreas: ["Casselberry", "Longwood", "Maitland", "Forest City"],
    },
    {
        slug: "celebration",
        name: "Celebration",
        county: "Osceola County",
        description: "Celebration is Disney's planned community south of Orlando, featuring a distinctive architectural style with prominent soffit overhangs on nearly every home. The community's design standards mean soffit work must match existing aesthetics precisely.",
        localNote: "Celebration homes are known for their deep overhangs and traditional architectural details. The community has strict HOA guidelines — we are experienced in matching existing material colors and profiles. Many original soffit installations from the late 1990s are now 25+ years old.",
        homeStyle: "Traditional architecture, deep overhangs, HOA community — Disney-designed",
        population: "~11,000",
        zipCodes: ["34747"],
        nearbyAreas: ["Kissimmee", "Buena Ventura Lakes", "Hunters Creek"],
    },
];

export function getCityData(slug: string): CityData | undefined {
    return cities.find(c => c.slug === slug);
}
