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

import SenarioContext from '../../../../context/SenarioContext';

function CreateUpdateCatagory({  selectedData, editable, setEditable, name  }) {
    const {
      createSenario,updateSenario,
        setSelectedData, setCreateOpen, 
        deleteSenario, warn, SetWarn } = useContext(SenarioContext);

    const FormSchema = yup.object().shape({
        SenarioCode: yup.string().required("SenarioCode is required"),
        SenarioPrice: yup.string().required("SenarioPrice is required"),
        SenarioProcedure: yup.string().required("SenarioProcedure is required"),
        comment: yup.string().required("comment is required"),

    
    });

    const handleSubmit = async (values) => {
        try {
            if (selectedData) {
              await updateSenario( {selectedData: selectedData._id, values});
    
            }
            else {
              console.log("create",values);
              await createSenario(values);
            }
            setEditable(false);
            setSelectedData(null);
            setCreateOpen(false);
        }
        catch (err) {
            console.log(err);
        }
    };


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
                                SenarioCode: selectedData ? selectedData.SenarioCode : "",
                                SenarioPrice: selectedData ? selectedData.SenarioPrice : "",
                                SenarioProcedure: selectedData ? selectedData.SenarioProcedure : "",
                                comment: selectedData ? selectedData.comment : "",
                        
                              }}
                                validationSchema={FormSchema}   
                                onSubmit={handleSubmit}
        
                            >
                                {({ errors, touched, values, handleChange, handleBlur }) => (
                                    <Form
                                    // autoComplete="off"
                                    // noValidate
                                    // onSubmit={handleSubmit}
                                    >
                                      <Card const sx={{
                                        flexGrow: 1,
                                        border: "none",
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.06)",
                                        borderRadius: "10px",
                                        transition: "all 0.3s ease-in-out",
                                        '&:hover': {
                                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                        }
                                      }}>
                                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={'2%'}>
                
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
                                        <CardContent sx={{ p: '5%' }}>
                                          <Box sx={{ m: -1.5 }}>
                                            <Grid
                                              container
                                              spacing={3}
                                            >
                
                                              <Grid
                                                xs={12}
                                                md={6}
                                              >
                                            <TextField
                                            autoFocus={editable}
                                            fullWidth
                                            label="SenarioCode"
                                            name="SenarioCode"
                                            value={values?.SenarioCode}
                                            onChange={handleChange}
                                            error={Boolean(touched.SenarioCode && errors.SenarioCode)}
                                            helperText={touched.SenarioCode && errors.SenarioCode}
                                            InputProps={{
                                            readOnly: !editable,
                                            }}
                                    />
                                    </Grid>
                                    <Grid
                                                xs={12}
                                                md={6}
                                              >
                                            <TextField
                                            autoFocus={editable}
                                            fullWidth
                                            label="SenarioPrice"
                                            name="SenarioPrice"
                                            value={values?.SenarioPrice}
                                            onChange={handleChange}
                                            error={Boolean(touched.SenarioPrice && errors.SenarioPrice)}
                                            helperText={touched.SenarioPrice && errors.SenarioPrice}
                                            InputProps={{
                                            readOnly: !editable,
                                            }}
                                    />
                                    </Grid><Grid
                                                xs={12}
                                                md={6}
                                              >
                                            <TextField
                                            autoFocus={editable}
                                            fullWidth
                                            label="SenarioProcedure"
                                            name="SenarioProcedure"
                                            value={values?.SenarioProcedure}
                                            onChange={handleChange}
                                            error={Boolean(touched.SenarioProcedure && errors.SenarioProcedure)}
                                            helperText={touched.SenarioProcedure && errors.SenarioProcedure}
                                            InputProps={{
                                            readOnly: !editable,
                                            }}
                                    />
                                    </Grid><Grid
                                                xs={12}
                                                md={6}
                                              >
                                            <TextField
                                            autoFocus={editable}
                                            fullWidth
                                            label="comment"
                                            name="comment"
                                            value={values?.comment}
                                            onChange={handleChange}
                                            error={Boolean(touched.comment && errors.comment)}
                                            helperText={touched.comment && errors.comment}
                                            InputProps={{
                                            readOnly: !editable,
                                            }}
                                    />
                                    </Grid>
                                    </Grid>
                                  </Box>
                                </CardContent >
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
                                    <> <Button variant="contained" type="submit">
                                      {"Create"}
                                    </Button></>
                                  )}
        
                                </CardActions>
                              </Card>
                            </Form>)}
                        </Formik >
                      </Grid>
        
                    </Grid>
                  </Box>
                </Container>
              </Box>
              <Warndialogue
                open={warn}
        setOpen={SetWarn}
        name={name}
        action={deleteSenario}
        selectedData={selectedData}
        setSelectedData={setSelectedData}
        
              />
            </>
          )
        }
        
        export default CreateUpdateCatagory
        CreateUpdateCatagory.propTypes = {
          selectedData: PropTypes.object,
          editable: PropTypes.bool,
        };
        
        