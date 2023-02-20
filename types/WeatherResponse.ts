type WeatherResponse = {
    visibility: number;
    timezone:   number;
    main:       Main;
    clouds:     Clouds;
    sys:        Sys;
    dt:         number;
    coord:      Coord;
    weather:    Weather[];
    name:       string;
    cod:        number;
    id:         number;
    base:       string;
    wind:       Wind;
}

type Clouds = {
    all: number;
}

type Coord = {
    lon: number;
    lat: number;
}

type Main = {
    temp:       number;
    temp_min:   number;
    grnd_level: number;
    humidity:   number;
    pressure:   number;
    sea_level:  number;
    feels_like: number;
    temp_max:   number;
}

type Sys = {
    country: string;
    sunrise: number;
    sunset:  number;
    id:      number;
    type:    number;
}

type Weather = {
    icon:        string;
    description: string;
    main:        string;
    id:          number;
}

type Wind = {
    deg:   number;
    speed: number;
    gust:  number;
}
