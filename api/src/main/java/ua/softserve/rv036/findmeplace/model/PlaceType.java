package ua.softserve.rv036.findmeplace.model;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum PlaceType {
    HOTEL("Hotel"),
    PARKING("Parking"),
    CAFE("Cafe"),
    PUB("Pub"),
    RESTAURANT("Restaurant");
    //etc

    String name;

    private PlaceType(String name) {
        this.name = name;
    }

    public String getValue() {
        return this.toString();
    }

    public String getName() {
        return name;
    }
}
