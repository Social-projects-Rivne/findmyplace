package ua.softserve.rv036.findmeplace.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Time;

@Data
@Entity
@Table(name = "Places")
public class Place {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(name = "count_free_places")
    private Integer countFreePlaces;

    @NotBlank
    @Size(min = 1, max = 255)
    private String name;

    @NotBlank
    @Size(min = 1, max = 255)
    private String address;

    @NotBlank
    @Size(min = 1, max = 255)
    private String description;

    @NotNull
    private Time open;
    @NotNull
    private Time close;

    @NotNull
    private Double latitude;

    @NotNull
    private Double longitude;

    @Enumerated(EnumType.STRING)
    @Column(name = "place_type")
    private PlaceType placeType;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "owner_id")
    private User owner;

}
