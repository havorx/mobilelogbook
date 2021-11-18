import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {addCircleOutline, notificationsOutline} from 'ionicons/icons'
import AddProperty from './pages/AddProperty';
import NativeFunction from './pages/NativeFunction';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/">
                        <Redirect to="/add-property"/>
                    </Route>
                    <Route exact path="/add-property">
                        <AddProperty/>
                    </Route>
                    <Route exact path="/native-function">
                        <NativeFunction/>
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="add-property" href="/add-property">
                        <IonIcon icon={addCircleOutline}/>
                        Register
                    </IonTabButton>
                    <IonTabButton tab="native-function" href="/native-function">
                        <IonIcon icon={notificationsOutline}/>
                        Native functions
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
)

export default App;
