import {
    IonButton, IonContent, IonDatetime, IonHeader,
    IonInput, IonItem, IonLabel, IonPage, IonRefresher,
    IonRefresherContent, IonSelect, IonTitle, IonSelectOption, IonToolbar,
    useIonToast
} from '@ionic/react';
import {useEffect, useState} from 'react';
import {insertRecord} from '../databaseHandler';

const Rent: React.FC = () => {
    const [property, setProperty] = useState('')
    const [bedroom, setBedroom] = useState('')
    const [date] = useState(new Date().toISOString())
    const [price, setPrice] = useState('')
    const [furniture, setFurniture] = useState('')
    const [note, setNotes] = useState('')
    const [reporter, setReporter] = useState('')
    const [present] = useIonToast()

    async function submitCLick() {
        const newEntry = {
            property: property,
            bedroom: bedroom,
            date: date,
            price: price,
            furniture: furniture,
            note: note,
            reporter: reporter
        }
        if (!property || !bedroom || !date || !price || !reporter) {
            present('Please enter in the required field', 2000)
        } else {
            await insertRecord(newEntry);
            present('Property submitted', 2000)
        }
    }

    function resetState() {
        setProperty('')
        setBedroom('')
        setPrice('')
        setFurniture('')
        setNotes('')
        setReporter('')
    }

    function doRefresh(event: any) {
        resetState()
        setTimeout(() => {
            console.log('refreshed')
            event.detail.complete()
        }, 1000)
    }

    useEffect(() => {
        resetState()
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>RentalZ</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonItem>
                    <IonLabel position="stacked">Property Type (*)</IonLabel>
                    <IonSelect onIonChange={event => setProperty(event.detail.value!)}>
                        <IonSelectOption>Flat</IonSelectOption>
                        <IonSelectOption>House</IonSelectOption>
                        <IonSelectOption>Bungalow</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Bedrooms (*)</IonLabel>
                    <IonSelect onIonChange={event => setBedroom(event.detail.value!)}>
                        <IonSelectOption>Studio</IonSelectOption>
                        <IonSelectOption>One</IonSelectOption>
                        <IonSelectOption>Two</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Created date (*)</IonLabel>
                    <IonDatetime readonly={true} value={date}/>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Monthly Rent Price (*)</IonLabel>
                    <IonInput onIonChange={event => setPrice(event.detail.value!)}/>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Furniture types </IonLabel>
                    <IonSelect onIonChange={event => setFurniture(event.detail.value!)}>
                        <IonSelectOption>Furnished</IonSelectOption>
                        <IonSelectOption>Unfurnished</IonSelectOption>
                        <IonSelectOption>Part Furnished</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Description Notes</IonLabel>
                    <IonInput onIonChange={event => setNotes(event.detail.value!)}/>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Reporter Name (*)</IonLabel>
                    <IonInput onIonChange={event => setReporter(event.detail.value!)}/>
                </IonItem>
                <IonButton expand="block" onClick={submitCLick}>Submit</IonButton>
                <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                    <IonRefresherContent/>
                </IonRefresher>
            </IonContent>
        </IonPage>
    );
};

export default Rent;
