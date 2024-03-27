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
import Warndialogue from "../../../components/Warndialogue";

import CountryContext from "../../../context/CountryContext";

function CreateUpdateCountry({    selectedData, editable, setEditable, name,}) {
  const {  

    setSelectedData, 
    setCreateOpen,
    countryData,
    createCountry,
    updateCountry,
    deleteCountry,
    warn,SetWarn } = useContext(CountryContext);
  
  const FormSchema = yup.object().shape({
    countryName: yup.string().required("continent Name is required"),
    countryCode: yup.string().required("countryCode is required"),
    // countryLocation: yup.string().required("countryLocation is required"),
    countryCurrency: yup.string().required("countryCurrency is required"),
    timeZone: yup.string().required("timeZone is required"),
    continent: yup.string().required("continent is required"),
  });

  const initialValues={
    countryName: countryData?.countryName || "",
    countryCode: countryData?.countryCode|| "",
    // countryLocation: countryData?.countryLocation || "", 
    countryCurrency: countryData?.countryCurrency || "", 
    timeZone: countryData?.timeZone || "", 
    continent: countryData?.continent || "",  
  }
    const handleSubmit = async (values) => {
      console.log("'''''''''''''update'''''''''''''");
        try {
            if (selectedData) {
              await  updateCountry({selectedData:selectedData._id, values});
            }
            else {
              await createCountry(values );
            }
            setCreateOpen(false)
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
                            countryName: selectedData?.countryName || "",
                            countryCode: selectedData?.countryCode|| "",
                            // countryLocation: selectedData?.countryLocation || "", 
                            countryCurrency: selectedData?.countryCurrency || "", 
                            timeZone: selectedData?.timeZone || "", 
                            continent: selectedData?.continent || "",  
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
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <TextField
                                        error={Boolean (touched.countryName && errors.countryName)}
                                        fullWidth
                                        helperText={touched.countryName && errors.countryName}
                                        label="countryName"
                                        name="countryName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.countryName}
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
                                        error={Boolean (touched.countryCode && errors.countryCode)}
                                        fullWidth
                                        helperText={touched.countryCode && errors.countryCode}
                                        label="countryCode"
                                        name="countryCode"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.countryCode}
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
                                        error={Boolean (touched.countryCurrency && errors.countryCurrency)}
                                        fullWidth
                                        helperText={touched.countryCurrency && errors.countryCurrency}
                                        label="countryCurrency"
                                        name="countryCurrency"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.countryCurrency}
                                        variant="outlined"
                                        InputProps={{
                                          readOnly: !editable,
                                        }}
                                    /></Grid>
                                      <Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <TextField 
                                    error={Boolean (touched.timeZone && errors.timeZone)}
                                    fullWidth
                                    helperText={touched.timeZone && errors.timeZone}
                                    label="timeZone"
                                    name="timeZone"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.timeZone}
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

                                <TextField countryCurrency
                                error={Boolean (touched.continent && errors.continent)}
                                fullWidth
                                helperText={touched.continent && errors.continent}
                                label="continent"
                                name="continent"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.continent}
                                variant="outlined"
                                InputProps={{
                                  readOnly: !editable,
                                }}
                            />        </Grid>
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
                                          <Button variant="contained" type="submit" >
                                              {"Create"}
                                            </Button>
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
                action={deleteCountry}
                selectedData={selectedData}
                setEditable={setEditable}
                setSelectedData={setSelectedData}
                setCreateOpen={setCreateOpen}
            />
        </>
    );
}

CreateUpdateCountry.propTypes = {
    setCreateOpen: PropTypes.func,
    createOpen: PropTypes.bool,
    editable: PropTypes.bool,
    setEditable: PropTypes.func,
    name: PropTypes.string,

};


export default CreateUpdateCountry;
