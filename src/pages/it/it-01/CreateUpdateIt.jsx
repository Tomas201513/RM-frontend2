import { useContext } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
  Container,
  Tooltip,
  IconButton,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Formik, Form } from "formik";
import * as yup from "yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PropTypes from "prop-types";
import Warndialogue from "src/components/Warndialogue";
import AssetContext from "src/context/AssetContext";
import ItContext from "src/context/ItContext";  

function CreateUpdateIt({ selectedData, editable, setEditable, name}) {
  const {  
    setSelectedData, 
    setCreateOpen,
    itData,
    createIt, 
    updateIt, 
    deleteIt,
    warn,
    SetWarn } = useContext(ItContext);

  const {    
    laptops,
    assetData} = useContext(AssetContext);

  const FormSchema = yup.object().shape({
    asset: assetData?._id ||"",
      computerName: yup.string().required("computerName is required"),
      windowsVersion: yup.string().required("windowsVersion is required"),
      windowsLicenseStatus: yup.string().required("windowsLicenseStatus is required"),
      // windowsEdition: yup.string().required("windowsEdition is required"),
      officeVersion: yup.string().required("officeVersion is required"),
      officeLicenseStatus: yup.string().required("officeLicenseStatus is required"),
      antivirusInstalled: yup.string().required("antivirusInstalled is required"),
      // antivirusLicenseStatus: yup.string().required("antivirusLicenseStatus is required"),
      country: yup.string().required("antivirusLicenseStatus is required"),
  });


    const handleSubmit = async (values) => {
        try {
            if (selectedData) {
              console.log("update it@@@@@@@",selectedData._id);
              await  updateIt({selectedData:selectedData._id, values});
            }
            else {
              console.log("create it@@@@@@",values);
              await createIt(values);
            }
            setCreateOpen(false);
                setSelectedData(null);
                setEditable(false);

        }
        catch (err) {
            console.log(err);
        }
    }


        return (
            <>
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  py: '10%',
                  ml: '5%',
                  mr: '5%',
                }}
              >
                <Container maxWidth="lg">
        
                  < Box>
                    <Grid
                      container
                      spacing={3}
                    >
                      <Grid
                        xs={12}
                        md={12}
                        lg={4}
                      >
                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={'5%'} >
        
                          <Tooltip title="Back">
                            <IconButton
                              onClick={() => {
                                setSelectedData(null), setEditable(false), setCreateOpen(false);
                              }}
                              size="small"
                            >
                              <ArrowBackIcon size="small" />
                            </IconButton>
                          </Tooltip>
                          {/* <Box sx={{ flexGrow: 1 }} /> */}
        
                        </Box>
                      </Grid>
                      <Grid
                        xs={12}
                        md={12}
                        lg={12}
                      >
                        <Formik
                          initialValues={{
                            asset: selectedData ? selectedData?.asset._id: "",
                            computerName : selectedData ? selectedData?.computerName:"",
                            windowsVersion: selectedData ? selectedData?.windowsVersion:"",
                            windowsLicenseStatus: selectedData ? selectedData?.windowsLicenseStatus:"",
                            // windowsEdition: selectedData ? selectedData?.windowsEdition:"",
                            officeVersion: selectedData ? selectedData?.officeVersion:"",
                            officeLicenseStatus: selectedData ? selectedData?.officeLicenseStatus:"",
                            antivirusInstalled: selectedData ? selectedData?.antivirusInstalled:"",
                            // antivirusLicenseStatus: selectedData ? selectedData?.antivirusLicenseStatus:"",
                            country: selectedData ? selectedData?.country._id:"",
                          }}
                            validationSchema={FormSchema}
                            onSubmit={handleSubmit}
                            >

                            {({ errors, touched, values, handleChange, handleBlur }) => (

                                <Form>
                                    <Card>
                                <CardHeader

                                />
                                 <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} >

                                  <CardHeader
                                    title={selectedData ? `Update ${name}` : `Create ${name}`}
                                    subheader={selectedData ? "The information can be edited" : "Fill in the required information"}
                                  />
                                  {selectedData ? (

                                    <>
                                      <Tooltip title="Editable">
                                        <FormControlLabel
                                          control={<Switch />}
                                          // label="edit"
                                          onChange={() => setEditable(!editable)}
                                        />
                                      </Tooltip>
                                    </>) : (
                                    <></>
                                  )}

                                  </Box>
                                <CardContent>
                                <Grid
                                    container
                                    spacing={3}
                                >  
                                <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-labe">asset</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-labe"
                                                id="demo-simple-select"
                                                name="asset"
                                                value={values.asset}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                InputProps={{
                                                  readOnly: !editable,
                                                }}
                                                error={Boolean(touched.asset && errors.asset)}
                                                helperText={touched.asset && errors.asset}
                                                >
                                                {laptops.map((assete) => (
                                                    <MenuItem value={assete._id}>{assete?.type}</MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    <Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <TextField
                                        error={Boolean(touched.computerName && errors.computerName)}
                                        fullWidth
                                        helperText={touched.computerName && errors.computerName}
                                        label="Computer Name"
                                        name="computerName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.computerName}
                                        variant="outlined"
                                        InputProps={{
                                          readOnly: !editable,
                                        }}
                    
                                    />
                                    </Grid>
                                    <Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <TextField
                                        error={Boolean(touched.windowsVersion && errors.windowsVersion)}
                                        fullWidth
                                        helperText={touched.windowsVersion && errors.windowsVersion}
                                        label="windowsVersion"
                                        name="windowsVersion"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.windowsVersion}
                                        variant="outlined"
                                        InputProps={{
                                          readOnly: !editable,
                                        }}
                    
                                    />
                                    </Grid>
                                    <Grid
                                            xs={12}
                                            md={6}
                                        >
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">windowsLicenseStatus</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="windowsLicenseStatus"
                                                value={values.windowsLicenseStatus}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.windowsLicenseStatus && errors.windowsLicenseStatus)}
                                                helperText={touched.windowsLicenseStatus && errors.windowsLicenseStatus}
                                                >
                                                <MenuItem value="activated">activated</MenuItem>
                                                <MenuItem value="not_activated">not_activated</MenuItem>
                          
                                                </Select>
                                                  

                                            </FormControl>
                                        </Grid>

                                      {/* <Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <TextField
                                        error={Boolean(touched.windowsEdition && errors.windowsEdition)}
                                        fullWidth
                                        helperText={touched.windowsEdition && errors.windowsEdition}
                                        label="windowsEdition"
                                        name="windowsEdition"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.windowsEdition}
                                        variant="outlined"
                                        InputProps={{
                                          readOnly: !editable,
                                        }}
                    
                                    />
                                    </Grid> */}
                                    <Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <TextField
                                        error={Boolean(touched.officeVersion && errors.officeVersion)}
                                        fullWidth
                                        helperText={touched.officeVersion && errors.officeVersion}
                                        label="officeVersion"
                                        name="officeVersion"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.officeVersion}
                                        variant="outlined"
                                        InputProps={{
                                          readOnly: !editable,
                                        }}
                    
                                    />
                                    </Grid>



                                          <Grid
                                            xs={12}
                                            md={6}
                                        >
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">officeLicenseStatus</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="officeLicenseStatus"
                                                value={values.officeLicenseStatus}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.officeLicenseStatus && errors.officeLicenseStatus)}
                                                helperText={touched.officeLicenseStatus && errors.officeLicenseStatus}
                                                >
                                                <MenuItem value="activated">activated</MenuItem>
                                                <MenuItem value="not_activated">not_activated</MenuItem>
                          
                                                </Select>
                                                  

                                            </FormControl>
                                        </Grid>

                                        <Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <TextField
                                        error={Boolean(touched.antivirusInstalled && errors.antivirusInstalled)}
                                        fullWidth
                                        helperText={touched.antivirusInstalled && errors.antivirusInstalled}
                                        label="antivirusInstalled"
                                        name="antivirusInstalled"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.antivirusInstalled}
                                        variant="outlined"
                                        InputProps={{
                                          readOnly: !editable,
                                        }}
                    
                                    />
                                    </Grid>
                                    {/* <Grid
                                            xs={12}
                                            md={6}
                                        >
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">antivirusLicenseStatus</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="antivirusLicenseStatus"
                                                value={values.antivirusLicenseStatus}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.antivirusLicenseStatus && errors.antivirusLicenseStatus)}
                                                helperText={touched.antivirusLicenseStatus && errors.antivirusLicenseStatus}
                                                >
                                                <MenuItem value="activated">activated</MenuItem>
                                                <MenuItem value="not_activated">not_activated</MenuItem>
                          
                                                </Select>
                                                  

                                            </FormControl>
                                        </Grid> */}
                                        {/* <Grid

                                            xs={12}
                                            md={6}
                                        >
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-labeeeel">Asset</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-labeeeel"
                                                        id="demo-simple-seleeect"
                                                        name="asset"
                                                        value={values.asset}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        disabled={!editable}
                                                        error={Boolean(touched.asset && errors.asset)}
                                                        helperText={touched.asset && errors.asset}
                                                        >
                                                        {assetData?.map((assetDataa) => (
                                                            <MenuItem value={assetDataa?._id}>{assetDataa?.type}</MenuItem>
                                                        ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid> */}
                                    </Grid>
                                    
                                    </CardContent>
                                <Divider />
                                <CardActions sx={{ justifyContent: 'flex-end', mt: 2 }}>
                                          {selectedData ? (
                
                                            <>
                                              <Button variant="contained" type="submit">
                                                {"Update"}
                                              </Button>
                                              <Tooltip title="Delete">
                                                <Button variant="contained" color="error" onClick={() => SetWarn(true)}>
                                                  {"Delete"}
                                                </Button>
                                              </Tooltip>
                
                                            </>) : (
                                            <> <Button variant="contained" type="submit" >
                                              {"Create"}
                                            </Button></>
                                          )}
                
                                        </CardActions>
                   
                            </Card>
                            </Form>
                        )}
                    </Formik>
                    </Grid>
                </Grid>
                </Box>
            </Container>
            </Box>
            <Warndialogue
                open={warn}
                setOpen={SetWarn}
                name={name}
                action={deleteIt}
                selectedData={selectedData}
                setEditable={setEditable}
                setSelectedData={setSelectedData}
                setCreateOpen={setCreateOpen}
            />
        </>
    );
}

CreateUpdateIt.propTypes = {
    setCreateOpen: PropTypes.func,
    createOpen: PropTypes.bool,
    editable: PropTypes.bool,
    setEditable: PropTypes.func,
};


export default CreateUpdateIt;
