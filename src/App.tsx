import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Layout} from "./components/layout";
import {RoutesComponent} from "./routes";

function App() {

      return (
          <BrowserRouter>
            <Layout>
                <RoutesComponent />
            </Layout>
          </BrowserRouter>
      );
}

export default App;
