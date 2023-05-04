import React, {FC, useEffect, useRef} from 'react';
import {H2} from "~/components/shared/Typography";
import {ContactData, ImageData} from "~/types/prismic";
import css from "~/components/Homepage/sections/ContactSection.module.scss";
import classNames from "classnames";
import { Loader } from '@googlemaps/js-api-loader';

interface ContactSectionProps {
    contact_us: string;
    contacts: ContactData[];
    map_pin: ImageData;
}

const ContactSection: FC<ContactSectionProps> = ({ contact_us, contacts, map_pin}) => {
    const googlemap = useRef(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.GOOGLE_APIKEY!,
            version: 'weekly',
        });

        let map;
        loader.load().then(() => {
            const google = (window as any).google;

            const styledMapType = new google.maps.StyledMapType(
                [
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e9e9e9"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dedede"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "saturation": 36
                            },
                            {
                                "color": "#333333"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            },
                            {
                                "lightness": 19
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 17
                            },
                            {
                                "weight": 1.2
                            }
                        ]
                    }
                ],
                { name: "Styled Map" }
            );

            const myLatLng = { lat: 50.091454, lng: 14.427342 };

            map = new google.maps.Map(googlemap.current, {
                center: myLatLng,
                zoom: 16,
                disableDefaultUI: true,
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM,
                },
                fullscreenControl: true,
                fullscreenControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP,
                },
            });

            const image = {
                url: map_pin.url,
                // size: new google.maps.Size(48, 48),
                // origin: new google.maps.Point(0, 0),
            }

            new google.maps.Marker({
                position: myLatLng,
                map,
                title: "CIS s.r.o.",
                icon: map_pin?.url ? image : undefined
            });

            map.mapTypes.set("styled_map", styledMapType);
            map.setMapTypeId("styled_map");
        });
    });

    return (
        <section id="contact" className={css.section}>
            <H2>{contact_us}</H2>
            <div className={css.holder}>
                <div className={css.contacts}>
                    {contacts.map((item, idx) => (
                        <div className={classNames(css.contact, item.line_break && css.lineBreak)} key={"contact-" + idx}>
                            <span className={classNames("material-icons", css.icon)}>{item.icon}</span>
                            <div>
                                {item.contact.map((line, i) => (
                                    item.link_type ?
                                        <a
                                            href={`${item.link_type}:${line.text}`}
                                            key={"contact-line-" + idx + "-" + i}
                                        >
                                            {line.text}
                                        </a>
                                        :
                                        <div key={"contact-line-" + idx + "-" + i}>{line.text}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={css.mapHolder}>
                    <div className={css.map} ref={googlemap} />
                </div>
            </div>
        </section>
    )
}

export default ContactSection;
