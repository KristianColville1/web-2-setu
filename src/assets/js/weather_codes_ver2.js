const weatherCodes = {
    0: {
        day: {
            description: "Sunny",
            image: "/assets/images/icons/sunny.png",
        },
        night: {
            description: "Clear",
            image: "/assets/images/icons/sunny.png",
        },
    },
    1: {
        day: {
            description: "Mainly Sunny",
            image: "/assets/images/icons/sunny.png",
        },
        night: {
            description: "Mainly Clear",
            image: "/assets/images/icons/sunny.png",
        },
    },
    2: {
        day: {
            description: "Partly Cloudy",
            image: "/assets/images/icons/partially-cloudy.png",
        },
        night: {
            description: "Partly Cloudy",
            image: "/assets/images/icons/partially-cloudy.png",
        },
    },
    3: {
        day: {
            description: "Cloudy",
            image: "/assets/images/icons/cloud.png",
        },
        night: {
            description: "Cloudy",
            image: "/assets/images/icons/cloud.png",
        },
    },
    45: {
        day: {
            description: "Foggy",
            image: "/assets/images/icons/fog.png",
        },
        night: {
            description: "Foggy",
            image: "/assets/images/icons/fog.png",
        },
    },
    48: {
        day: {
            description: "Rime Fog",
            image: "/assets/images/icons/fog.png",
        },
        night: {
            description: "Rime Fog",
            image: "/assets/images/icons/fog.png",
        },
    },
    51: {
        day: {
            description: "Light Drizzle",
            image: "/assets/images/icons/drizzle.png",
        },
        night: {
            description: "Light Drizzle",
            image: "/assets/images/icons/drizzle.png",
        },
    },
    53: {
        day: {
            description: "Drizzle",
            image: "/assets/images/icons/drizzle.png",
        },
        night: {
            description: "Drizzle",
            image: "/assets/images/icons/drizzle.png",
        },
    },
    55: {
        day: {
            description: "Heavy Drizzle",
            image: "/assets/images/icons/drizzle.png",
        },
        night: {
            description: "Heavy Drizzle",
            image: "/assets/images/icons/drizzle.png",
        },
    },
    56: {
        day: {
            description: "Light Freezing Drizzle",
            image: "/assets/images/icons/drizzle.png",
        },
        night: {
            description: "Light Freezing Drizzle",
            image: "/assets/images/icons/drizzle.png",
        },
    },
    57: {
        day: {
            description: "Freezing Drizzle",
            image: "/assets/images/icons/drizzle.png",
        },
        night: {
            description: "Freezing Drizzle",
            image: "/assets/images/icons/drizzle.png",
        },
    },
    61: {
        day: {
            description: "Light Rain",
            image: "/assets/images/icons/raining.png",
        },
        night: {
            description: "Light Rain",
            image: "/assets/images/icons/raining.png",
        },
    },
    63: {
        day: {
            description: "Rain",
            image: "/assets/images/icons/raining.png",
        },
        night: {
            description: "Rain",
            image: "/assets/images/icons/raining.png",
        },
    },
    65: {
        day: {
            description: "Heavy Rain",
            image: "/assets/images/icons/raining.png",
        },
        night: {
            description: "Heavy Rain",
            image: "/assets/images/icons/raining.png",
        },
    },
    66: {
        day: {
            description: "Light Freezing Rain",
            image: "/assets/images/icons/raining.png",
        },
        night: {
            description: "Light Freezing Rain",
            image: "/assets/images/icons/raining.png",
        },
    },
    67: {
        day: {
            description: "Freezing Rain",
            image: "/assets/images/icons/raining.png",
        },
        night: {
            description: "Freezing Rain",
            image: "/assets/images/icons/raining.png",
        },
    },
    71: {
        day: {
            description: "Light Snow",
            image: "/assets/images/icons/snow.png",
        },
        night: {
            description: "Light Snow",
            image: "/assets/images/icons/snow.png",
        },
    },
    73: {
        day: {
            description: "Snow",
            image: "/assets/images/icons/snow.png",
        },
        night: {
            description: "Snow",
            image: "/assets/images/icons/snow.png",
        },
    },
    75: {
        day: {
            description: "Heavy Snow",
            image: "/assets/images/icons/snow.png",
        },
        night: {
            description: "Heavy Snow",
            image: "/assets/images/icons/snow.png",
        },
    },
    77: {
        day: {
            description: "Snow Grains",
            image: "/assets/images/icons/snow.png",
        },
        night: {
            description: "Snow Grains",
            image: "/assets/images/icons/snow.png",
        },
    },
    80: {
        day: {
            description: "Light Showers",
            image: "/assets/images/icons/drizzle.png",
        },
        night: {
            description: "Light Showers",
            image: "/assets/images/icons/drizzle.png",
        },
    },
    81: {
        day: {
            description: "Showers",
            image: "/assets/images/icons/drizzle.png",
        },
        night: {
            description: "Showers",
            image: "/assets/images/icons/drizzle.png",
        },
    },
    82: {
        day: {
            description: "Heavy Showers",
            image: "/assets/images/icons/drizzle.png",
        },
        night: {
            description: "Heavy Showers",
            image: "/assets/images/icons/drizzle.png",
        },
    },
    85: {
        day: {
            description: "Light Snow Showers",
            image: "/assets/images/icons/snow.png",
        },
        night: {
            description: "Light Snow Showers",
            image: "/assets/images/icons/snow.png",
        },
    },
    86: {
        day: {
            description: "Snow Showers",
            image: "/assets/images/icons/snow.png",
        },
        night: {
            description: "Snow Showers",
            image: "/assets/images/icons/snow.png",
        },
    },
    95: {
        day: {
            description: "Thunderstorm",
            image: "/assets/images/icons/storm.png",
        },
        night: {
            description: "Thunderstorm",
            image: "/assets/images/icons/storm.png",
        },
    },
    96: {
        day: {
            description: "Light Thunderstorms With Hail",
            image: "/assets/images/icons/storm.png",
        },
        night: {
            description: "Light Thunderstorms With Hail",
            image: "/assets/images/icons/storm.png",
        },
    },
    99: {
        day: {
            description: "Thunderstorm With Hail",
            image: "/assets/images/icons/storm.png",
        },
        night: {
            description: "Thunderstorm With Hail",
            image: "/assets/images/icons/storm.png",
        },
    },
};
