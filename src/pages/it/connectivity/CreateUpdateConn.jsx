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
import ConnContext from "src/context/ConnContext"

function CreateUpdateConn({ selectedData, editable, setEditable, name}) {
  const {  
    createOpen,
    setCreateOpen,
    setSelectedData,
    warn,
    SetWarn,
    handleRowClick,
    queryResult,
    isLoading,
    error,
    connData,
    createConn,
    updateConn,
    deleteConn,
  
    refetch, } = useContext(ConnContext);

  const {assetData,  internet_equipments,
    laptops,} = useContext(AssetContext);

  const FormSchema = yup.object().shape({
    asset: yup.string(),
    actedPremises: yup.string().required("actedPremises is required"),
    userN: yup.string().required("windowsVersion is required"),
    internetLink: yup.string().required("windowsLicenseStatus is required"),
    isp: yup.string().required("windowsEdition is required"),
    uploadSpeed: yup.string().required("officeVersion is required"),
    downloadSpeed: yup.string().required("officeLicenseStatus is required"),
    contentionRatio: yup.string().required("antivirusInstalled is required"),
    purpose: yup.string().required("antivirusLicenseStatus is required"),
    device: yup.string().required("antivirusLicenseStatus is required"),

  });

  const handleSubmit = async (values) => {
    try {
        if (selectedData) {
          console.log("update it",selectedData._id);
          await  updateConn({selectedData:selectedData._id, values});
        }
        else {
          await createConn(values);
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
                            asset: selectedData ? selectedData?.asset?._id: "",
                            actedPremises: selectedData ? selectedData?.actedPremises: "",
                            userN: selectedData ? selectedData?.userN: "",
                            internetLink: selectedData ? selectedData?.internetLink: "",
                            isp: selectedData ? selectedData?.isp: "",
                            uploadSpeed: selectedData ? selectedData?.uploadSpeed: "",
                            downloadSpeed: selectedData ? selectedData?.downloadSpeed: "", 
                            contentionRatio: selectedData ? selectedData?.contentionRatio: "",
                            purpose: selectedData ? selectedData?.purpose: "",
                            device: selectedData ? selectedData?.device: "",
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
                                                <InputLabel id="demo-simple-select-con">asset</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-con"
                                                id="demo-simple-con"
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
                                                {internet_equipments.map((assete) => (
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
                                        error={Boolean(touched.actedPremises && errors.actedPremises)}
                                        fullWidth
                                        helperText={touched.actedPremises && errors.actedPremises}
                                        label="actedPremises"
                                        name="actedPremises"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.actedPremises}
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
                                        error={Boolean(touched.userN && errors.userN)}
                                        fullWidth
                                        helperText={touched.userN && errors.userN}
                                        label="userN"
                                        name="userN"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.userN}
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
                                        error={Boolean(touched.internetLink && errors.internetLink)}
                                        fullWidth
                                        helperText={touched.internetLink && errors.internetLink}
                                        label="internetLink"
                                        name="internetLink"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.internetLink}
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
                                        error={Boolean(touched.isp && errors.isp)}
                                        fullWidth
                                        helperText={touched.isp && errors.isp}
                                        label="isp"
                                        name="isp"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.isp}
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
                                        error={Boolean(touched.uploadSpeed && errors.uploadSpeed)}
                                        fullWidth
                                        helperText={touched.uploadSpeed && errors.uploadSpeed}
                                        label="uploadSpeed"
                                        name="uploadSpeed"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.uploadSpeed}
                                        variant="outlined"
                                        InputProps={{
                                          readOnly: !editable,
                                        }}
                    
                                    />
                                    </Grid>   <Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <TextField
                                        error={Boolean(touched.downloadSpeed && errors.downloadSpeed)}
                                        fullWidth
                                        helperText={touched.downloadSpeed && errors.downloadSpeed}
                                        label="downloadSpeed"
                                        name="downloadSpeed"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.downloadSpeed}
                                        variant="outlined"
                                        InputProps={{
                                          readOnly: !editable,
                                        }}
                    
                                    />
                                    </Grid><Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <TextField
                                        error={Boolean(touched.contentionRatio && errors.contentionRatio)}
                                        fullWidth
                                        helperText={touched.contentionRatio && errors.contentionRatio}
                                        label="contentionRatio"
                                        name="contentionRatio"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.contentionRatio}
                                        variant="outlined"
                                        InputProps={{
                                          readOnly: !editable,
                                        }}
                    
                                    />
                                    </Grid><Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <TextField
                                        error={Boolean(touched.purpose && errors.purpose)}
                                        fullWidth
                                        helperText={touched.purpose && errors.purpose}
                                        label="purpose"
                                        name="purpose"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.purpose}
                                        variant="outlined"
                                        InputProps={{
                                          readOnly: !editable,
                                        }}
                    
                                    />
                                    </Grid><Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <TextField
                                        error={Boolean(touched.device && errors.device)}
                                        fullWidth
                                        helperText={touched.device && errors.device}
                                        label="device"
                                        name="device"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.device}
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
                action={deleteConn}
                selectedData={selectedData}
                setEditable={setEditable}
                setSelectedData={setSelectedData}
                setCreateOpen={setCreateOpen}
            />
        </>
    );
}

CreateUpdateConn.propTypes = {
    office: PropTypes.object,
    setCreateOpen: PropTypes.func,
    createOpen: PropTypes.bool,
    editable: PropTypes.bool,
    setEditable: PropTypes.func,
};

export default CreateUpdateConn

