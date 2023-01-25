import React, { useRef, useState } from "react";
import {
    GoogleApiWrapper,
    IMarkerProps,
    InfoWindow,
    IProvidedProps,
    Map,
    Marker,
} from "google-maps-react";
import { FiMinus, FiPlus } from "react-icons/fi";
import {
    GoogleLocate,
    MapMarker,
    MapMarkerGreen,
    MapMarkerGray,
    MapMarkerRed,
} from "../../public/img";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Image from "next/image";
import styles from "./Map.module.scss";
import classNames from "classnames";

const MapComponent = (props: IProvidedProps) => {
    const mapRef = useRef<Map>(null);
    const [zoom, setZoom] = useState(12);
    const [
        mapCenter,
        // setMapCenter
    ] = useState({
        lat: 6.45567900007564,
        lng: 3.388292095013091,
    });
    const [activeMarker, setActiveMarker] = useState({});
    const [showInfoWindow, setShowInfoWindow] = useState(false);

    const style = {
        width: "100%",
        height: "400px",
        position: "relative",
    };

    const containerStyle = {
        width: "100%",
        height: "100%",
        position: "relative",
    };

    const onMarkerClick: IMarkerProps["onClick"] = (props, marker) => {
        setShowInfoWindow(true);
        setActiveMarker(marker);
    };

    const agents = [
        { lat: 6.43567900007564, lng: 3.408292095013091, status: "Available" },
        { lat: 6.45467900007564, lng: 3.408292095013091, status: "Active" },
        { lat: 6.42567900007564, lng: 3.388292095013091, status: "Active" },
        {
            lat: 6.44567900007564,
            lng: 3.370292095013091,
            status: "Unavailable",
        },
        { lat: 6.46567900007564, lng: 3.398292095013091, status: "Inactive" },
    ];

    return (
        <div className="px-md-4 px-2 pb-4">
            <div className="d-md-flex">
                <div className={classNames(styles.locationContainer, "px-4 py-4")}>
                    <div className="mt-2 mb-4">Agent Locations</div>
                    <div>
                        <figure style={{ borderRadius: 8, overflow: "hidden" }}>
                            {/* @ts-expect-error */}
                            <Map
                                ref={mapRef}
                                google={props.google}
                                zoom={zoom}
                                style={style}
                                containerStyle={containerStyle}
                                initialCenter={mapCenter}
                                zoomControl={false}
                                mapTypeControl={false}
                                scaleControl={false}
                                streetViewControl={false}
                                fullscreenControl={false}
                                panControl={false}
                                rotateControl={false}
                            >
                                <div className={styles.googleMapControllerMain}>
                                    <button onClick={() => setZoom(12)}>
                                        <Image src={GoogleLocate} alt="" className="img-fluid" />
                                    </button>
                                    <div className={styles.controllerLine} />
                                    <button
                                        className={styles.controllerBtn}
                                        onClick={zoom > 2 ? () => setZoom(zoom + 1) : () => {}}
                                    >
                                        <FiPlus />
                                    </button>
                                    <div className={styles.controllerLine} />
                                    <button
                                        className={styles.controllerBtn}
                                        onClick={zoom > 2 ? () => setZoom(zoom - 1) : () => {}}
                                    >
                                        <FiMinus />
                                    </button>
                                </div>
                                {agents.map((agent) => {
                                    const icon = {
                                        url: (agent.status === "Active"
                                            ? MapMarker
                                            : agent.status === "Available"
                                            ? MapMarkerGreen
                                            : agent.status === "Inactive"
                                            ? MapMarkerGray
                                            : MapMarkerRed
                                        ).src, // url
                                        scaledSize: new props.google.maps.Size(90, 42), // scaled size
                                    };
                                    return (
                                        <Marker
                                            key={agent.lat + agent.lng}
                                            onClick={onMarkerClick}
                                            //  @ts-expect-error
                                            position={{
                                                lat: agent.lat,
                                                lng: agent.lng,
                                            }}
                                            icon={icon}
                                        />
                                    );
                                })}
                                {showInfoWindow && (
                                    // @ts-expect-error
                                    <InfoWindow marker={activeMarker} visible={showInfoWindow}>
                                        <div className={styles.infoWindow}>
                                            <div
                                                // TODO: change div for Image
                                                className={styles.profileImage}
                                            />

                                            <p className={styles.agentName}>Tajao Bullaha</p>
                                            <div className={styles.infoAddress}>
                                                <Image src={MapMarker} alt="" />
                                                <p className={styles.agentLocation}>
                                                    Ire-akari Estate Isolo, Lagos State
                                                </p>
                                            </div>
                                            <span className={styles.infoStatus}>
                                                Enroute Dropoff
                                            </span>
                                        </div>
                                    </InfoWindow>
                                )}
                            </Map>
                        </figure>
                    </div>
                </div>
                <div className={classNames(styles.agentContainer, "px-4 py-4 mt-md-0 mt-4")}>
                    <div className="mt-2">
                        <div className={styles.agentTitle}>Agent Analysis</div>
                        <div className={classNames(styles.agentSubtitle, "my-1")}>
                            Realtime status of registered agent
                        </div>
                    </div>
                    <div>
                        <div className={classNames(styles.agentStatusA, "mt-5")}>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Popover
                                        id="inactive-agents"
                                        className="py-2 px-3 text-center text-20"
                                    >
                                        <span
                                            className={classNames(styles.agentType, "d-block mb-1")}
                                        >
                                            Inactive Agents
                                        </span>
                                        <span className={styles.greyText}>300</span>
                                    </Popover>
                                }
                            >
                                <div>
                                    <span>300</span>
                                    <span>Inactive</span>
                                </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Popover
                                        id="unavailable-agents"
                                        className="py-2 px-3 text-center text-16"
                                    >
                                        <span
                                            className={classNames(styles.agentType, "d-block mb-1")}
                                        >
                                            Unavailable Agents
                                        </span>
                                        <span className={styles.pinkText}>130</span>
                                    </Popover>
                                }
                            >
                                <div>
                                    <span>130</span>
                                    <span>Unavailable</span>
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className={classNames(styles.agentStatusB, "mt-4")}>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Popover
                                        id="available-agents"
                                        className="py-2 px-3 text-center text-16"
                                    >
                                        <span
                                            className={classNames(styles.agentType, "d-block mb-1")}
                                        >
                                            Available Agents
                                        </span>
                                        <span className={styles.greenText}>500</span>
                                    </Popover>
                                }
                            >
                                <div>
                                    <span>500</span>
                                    <span>Available</span>
                                </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Popover
                                        id="active-agents"
                                        className="py-2 px-3 text-center text-16"
                                    >
                                        <span
                                            className={classNames(styles.agentType, "d-block mb-1")}
                                        >
                                            Active Agents
                                        </span>
                                        <span className={styles.blueText}>100</span>
                                    </Popover>
                                }
                            >
                                <div>
                                    <span>100</span>
                                    <span>Active</span>
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div className={classNames(styles.agentStatus, "row mt-5")}>
                        <div className="col-6 mt-2">
                            <div></div>
                            <div>Available</div>
                        </div>
                        <div className="col-6 mt-2">
                            <div></div>
                            <div>Active</div>
                        </div>
                        <div className="col-6 mt-2">
                            <div></div>
                            <div>Unavailable</div>
                        </div>
                        <div className="col-6 mt-2">
                            <div></div>
                            <div>Inactive</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyC445P-0GdRNz_li2hPGjYLzHzFokCpj68",
    LoadingContainer: () => <div></div>,
})(MapComponent);
