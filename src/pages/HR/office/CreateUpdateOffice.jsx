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
import CountryContext from '../../../context/CountryContext';

import OfficeContext from '../../../context/OfficeContext';

function CreateUpdateOffice({ selectedData, editable, setEditable, name}) {
  const {  
    createOffice,
    setSelectedData, 
    setCreateOpen,
    officeData,
    updateOffice,
    deleteOffice,warn,SetWarn } = useContext(OfficeContext);
    const {
      countryData,
  } = useContext(CountryContext);
  const FormSchema = yup.object().shape({
    officeLocation: yup.string().required("Required"),
    officeAreaName: yup.string().required("Required"),
    officeSubAreaName: yup.string(),
    country: yup.string().required("Required"),
    officePhone : yup.string().required("Required"),
  });

    const initialValues = {
        officeLocation: selectedData?.officeLocation || "",
        officeAreaName: selectedData?.officeAreaName || "",
        officeSubAreaName: selectedData?.officeSubAreaName || "",
        country: selectedData?.country?._id ||"",
        officePhone: selectedData?.officePhone || "",
    };

    const handleSubmit = async (values) => {
        try {
            if (selectedData) {
              console.log("update ofice",selectedData._id);
              await  updateOffice({selectedData:selectedData._id, values});
            }
            else {
              await createOffice(values);
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
                            officeLocation: selectedData ? selectedData.officeLocation : "",
                            officeAreaName: selectedData? selectedData?.officeAreaName:"",
                            officeSubAreaName: selectedData ? selectedData?.officeSubAreaName:"",
                            officePhone: selectedData ? selectedData?.officePhone:"",
                            country: selectedData ? selectedData?.country?._id:"",
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
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">country</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="country"
                                        value={values.country}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        inputProps={{
                                          readOnly: !editable,
                                        }}
                                        error={Boolean(touched.country && errors.country)}
                                        helperText={touched.country && errors.country}
                                                
                                        >
                                        {countryData.map((countryDataa) => (
                                                    <MenuItem key={countryDataa._id} value={countryDataa._id}>{countryDataa.countryName}</MenuItem>
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
                                        error={Boolean(touched.officeLocation && errors.officeLocation)}
                                        fullWidth
                                        helperText={touched.officeLocation && errors.officeLocation}
                                        label="Office Location"
                                        name="officeLocation"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.officeLocation}
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
                                        error={Boolean(touched.officeAreaName && errors.officeAreaName)}
                                        fullWidth
                                        helperText={touched.officeAreaName && errors.officeAreaName}
                                        label="Office Area Name"
                                        name="officeAreaName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.officeAreaName}
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
                                        error={Boolean(touched.officeSubAreaName && errors.officeSubAreaName)}
                                        fullWidth
                                        helperText={touched.officeSubAreaName && errors.officeSubAreaName}
                                        label="Office Sub Area Name"
                                        name="officeSubAreaName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.officeSubAreaName}
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
                                        error={Boolean(touched.officePhone && errors.officePhone)}
                                        fullWidth
                                        helperText={touched.officePhone && errors.officePhone}
                                        label="Office Phone"
                                        name="officePhone"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.officePhone}
                                        variant="outlined"
                                        InputProps={{
                                          readOnly: !editable,
                                        }}
                    
                                    />
                                    </Grid>
                                    
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
                action={deleteOffice}
                selectedData={selectedData}
                setEditable={setEditable}
                setSelectedData={setSelectedData}
                setCreateOpen={setCreateOpen}
            />
        </>
    );
}

CreateUpdateOffice.propTypes = {
    office: PropTypes.object,
    setCreateOpen: PropTypes.func,
    createOpen: PropTypes.bool,
    editable: PropTypes.bool,
    setEditable: PropTypes.func,
};


export default CreateUpdateOffice;
