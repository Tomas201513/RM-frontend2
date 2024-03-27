// import { HelmetProvider } from "react-helmet-async";
import RoutesComponent from "./routes";
import { CssBaseline } from "@mui/material";
import ErrorBoundary from "./ErrorBoundary";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastProvider } from "./context/hot-toast-context/HotToastContext";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import { ReactQueryDevtools } from "react-query/devtools";
import { BudgetProvider } from "./context/BudgetContext";
import { ProjectProvider } from "./context/ProjectContext";
import { AssetProvider } from "./context/AssetContext";
import {OfficeProvider} from "./context/OfficeContext";
import {DepartmentProvider} from "./context/DepartmentContext";
import {PositionProvider} from "./context/PositionContext";
import {CatagoryProvider} from "./context/CatagoryContext";
import {SubCatagoryProvider} from "./context/SubCatagoryContext";
import {ItProvider} from "./context/ItContext"
import {ConnProvider} from "./context/ConnContext"
import {CountryProvider} from "./context/CountryContext"
import {SenarioProvider} from "./context/SenarioContext"
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

import './App.css';
// import "/src/App";

function App() {
  TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

  const queryClient = new QueryClient();
  return (
    <>
    {/* <HelmetProvider> */}
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <ErrorBoundary>
            <AuthProvider>
              <CountryProvider>
            <CatagoryProvider>
            <SubCatagoryProvider>
              <PositionProvider>
                <OfficeProvider>
                  <DepartmentProvider>
                   <UserProvider>
                    <ProjectProvider>
                      <BudgetProvider>
                        <AssetProvider>
                          <ItProvider>
                          <ConnProvider>
                            <SenarioProvider>
                              <RoutesComponent />
                            </SenarioProvider>
                          </ConnProvider>
                          </ItProvider>
                        </AssetProvider>
                      </BudgetProvider>
                    </ProjectProvider>
                  </UserProvider>
                </DepartmentProvider>
               </OfficeProvider>
              </PositionProvider>
              </SubCatagoryProvider>
            </CatagoryProvider>
            </CountryProvider>
            </AuthProvider>
          </ErrorBoundary>
        </ToastProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    {/* </HelmetProvider> */}
    </>


  )
}

export default App
