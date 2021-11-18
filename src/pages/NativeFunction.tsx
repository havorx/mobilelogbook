import {
    IonButton, IonContent, IonHeader, IonItem,
    IonPage, IonTitle, IonToolbar
} from "@ionic/react";
import ReactAudioPlayer from 'react-audio-player';
import React from "react";

const NativeFunction: React.FC = () => {
    let musicPlayer: ReactAudioPlayer | null

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Native functions</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonItem>
                    <IonButton onClick={() => musicPlayer?.audioEl.current?.play()}>Play ringtone</IonButton>
                    <IonButton onClick={() => musicPlayer?.audioEl.current?.load()}>Stop ringtone</IonButton>
                    <ReactAudioPlayer ref={(element) => {
                        musicPlayer = element
                    }} src='./assets/nokia.mp3'/>
                </IonItem>
                <IonItem>
                    <IonButton onClick={() => navigator.vibrate(2000)}>Vibrate</IonButton>
                </IonItem>
            </IonContent>
        </IonPage>
    )
}

export default NativeFunction
