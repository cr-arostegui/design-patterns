export default class Director {
    makeSUV(builder) {
        builder.reset();
        builder.setSeats(5);
        builder.setEngine('v4');
        builder.setTripComputer(true);
        builder.setGPS(true);
    }

    makeSportsCar(builder) {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine('v12');
        builder.setTripComputer(false);
        builder.setGPS(false);
    }
}