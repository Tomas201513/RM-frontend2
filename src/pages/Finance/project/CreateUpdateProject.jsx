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

import ProjectContext from "src/context/ProjectContext";
import UserContext from 'src/context/UserContext';
import CountryContext from 'src/context/CountryContext';

const CreateUpdateProject = ({ selectedData, name}) => {
    const {createProject,
            setSelectedData, 
            updateProject, 
            setCreateOpen,
            deleteProject,
            warn,  editable, setEditable,
            SetWarn
          } = useContext(ProjectContext);
          const {  userData  } = useContext(UserContext);

          const { countryData } = useContext(CountryContext);
          console.log("$$$$$$$$$$$$",userData)
    const FormSchema = yup.object().shape({
      projectTitle: yup.string().required("Project is required"),
      donorName: yup.string().required("Donor Name is required"),
      donorCode: yup.string().required("Donor Code is required"),
      backDonor:yup.string(),
      projectCode: yup.string().required("Project Code is required"),
      status:yup.string().required("Donor Name is required"),
      projStartDate:yup.string().required("Donor Name is required"),
      projEndDate:yup.string().required("Donor Name is required"),
      totalBudget:yup.string().required("required"),
      projectManager:yup.string().required("required"),
      comment: yup.string().required("Comment is required"),
      country: yup.string().required("Country is required"),
    });
    const handleSubmit = async (values) => {
        try {
            if (selectedData) {
              console.log('88888888888',selectedData._id);
              await 
                updateProject({selectedData: selectedData._id, values});
            }
            else {
              await createProject(values);
            }
            setEditable(false);
            setSelectedData(null);
            setCreateOpen(false);
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
                            projectTitle: selectedData ? selectedData.projectTitle : "",
                            donorName: selectedData ? selectedData.donorName : "",
                            donorCode: selectedData ? selectedData.donorCode : "",
                            projectName: selectedData ? selectedData.projectName : "",
                            projectCode: selectedData ? selectedData.projectCode : "",

                            backDonor: selectedData ? selectedData.backDonor : "",
                            status: selectedData ? selectedData.status : "",
                            projStartDate: selectedData ? selectedData.projStartDate : "",
                            projEndDate: selectedData ? selectedData.projEndDate : "",
                            totalBudget: selectedData ? selectedData.totalBudget : "",
                            projectManager: selectedData ? selectedData.projectManager?._id : "",
                            comment: selectedData ? selectedData.comment : "",
                            country: selectedData ? selectedData.country?._id : "",
                          }}
                            validationSchema={FormSchema}
                            onSubmit={handleSubmit}
                        >
                              {({ errors, touched, values, handleChange, handleBlur }) => (

                            <Form>
                            <Card>
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
                            <CardContent>
                                  <Grid
                                    container
                                    spacing={3}
                                  >
                                    <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={6}
                                    >
                                        <TextField
                                            error={Boolean(touched.projectTitle && errors.projectTitle)}
                                            fullWidth
                                            helperText={touched.projectTitle && errors.projectTitle}
                                            label="projectTitle"
                                            name="projectTitle"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.projectTitle}
                                            variant="outlined"
                                            InputProps={{
                                              readOnly: !editable,
                                            }}
                                        />
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={6}
                                    >
                                        <TextField
                                            error={Boolean(touched.donorName && errors.donorName)}
                                            fullWidth
                                            helperText={touched.donorName && errors.donorName}
                                            label="Donor Name"
                                            name="donorName"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.donorName}
                                            variant="outlined"
                                            InputProps={{
                                              readOnly: !editable,
                                            }}
                                        />
                                    </Grid>


                                    <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={6}
                                    >
                                        <TextField
                                            error={Boolean(touched.backDonor && errors.backDonor)}
                                            fullWidth
                                            helperText={touched.backDonor && errors.backDonor}
                                            label="backDonor"
                                            name="backDonor"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.backDonor}
                                            variant="outlined"
                                            InputProps={{
                                              readOnly: !editable,
                                            }}
                                        />
                                    </Grid>


                                    <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={6}
                                    >
                                        <TextField
                                            error={Boolean(touched.projectCode && errors.projectCode)}
                                            fullWidth
                                            helperText={touched.projectCode && errors.projectCode}
                                            label="projectCode"
                                            name="projectCode"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.projectCode}
                                            variant="outlined"
                                            InputProps={{
                                              readOnly: !editable,
                                            }}
                                        />
                                    </Grid>



                                    <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={6}
                                    >
                                        <TextField
                                            error={Boolean(touched.projStartDate && errors.projStartDate)}
                                            fullWidth
                                            helperText={touched.projStartDate && errors.projStartDate}
                                            label="projStartDate"
                                            name="projStartDate"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.projStartDate}
                                            variant="outlined"
                                            InputProps={{
                                              readOnly: !editable,
                                            }}
                                        /> 
                                                                            </Grid>

                                        <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        lg={6}
                                      >
                                          <TextField
                                              error={Boolean(touched.projEndDate && errors.projEndDate)}
                                              fullWidth
                                              helperText={touched.projEndDate && errors.projEndDate}
                                              label="projEndDate"
                                              name="projEndDate"
                                              onBlur={handleBlur}
                                              onChange={handleChange}
                                              value={values.projEndDate}
                                              variant="outlined"
                                              InputProps={{
                                                readOnly: !editable,
                                              }}
                                          /> 
                                                                              </Grid>
                   
                                    
                                    <Grid
                                          item
                                          xs={12}
                                          md={6}
                                          lg={6}
                                        >
                                            <TextField
                                                error={Boolean(touched.donorCode && errors.donorCode)}
                                                fullWidth
                                                helperText={touched.donorCode && errors.donorCode}
                                                label="donorCode"
                                                name="donorCode"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.donorCode}
                                                variant="outlined"
                                                InputProps={{
                                                  readOnly: !editable,
                                                }}
                                            /></Grid>
                                            
                                            <Grid
                                            item
                                            xs={12}
                                            md={6}
                                            lg={6}
                                          >
                                              <TextField
                                                  error={Boolean(touched.totalBudget && errors.totalBudget)}
                                                  fullWidth
                                                  helperText={touched.totalBudget && errors.totalBudget}
                                                  label="totalBudget"
                                                  name="totalBudget"
                                                  onBlur={handleBlur}
                                                  onChange={handleChange}
                                                  value={values.totalBudget}
                                                  variant="outlined"
                                                  InputProps={{
                                                    readOnly: !editable,
                                                  }}
                                              /></Grid>
                                              <Grid
                                                xs={12}
                                                md={6}
                                              >
                                                  <FormControl fullWidth>
                                                      <InputLabel id="demo-simple-select-label">projectManager</InputLabel>
                                                      <Select
                                                      labelId="demo-simple-select-label"
                                                      id="demo-simple-select"
                                                      name="projectManager"
                                                      value={values.projectManager}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      disabled={!editable}
                                                      error={Boolean(touched.projectManager && errors.projectManager)}
                                                      helperText={touched.projectManager && errors.projectManager}
                                                      >
                                                      {userData?.map((userDataa) => (
                                                          <MenuItem value={userDataa._id}>{userDataa?.email}</MenuItem>
                                                      ))}
                                                      </Select>
                                                  </FormControl>
                                              </Grid> <Grid
                                                xs={12}
                                                md={6}
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
                                                      disabled={!editable}
                                                      error={Boolean(touched.country && errors.country)}
                                                      helperText={touched.country && errors.country}
                                                      >
                                                      {countryData?.map((countryDataa) => (
                                                          <MenuItem value={countryDataa._id}>{countryDataa?.countryName}</MenuItem>
                                                      ))}
                                                      </Select>
                                                  </FormControl>
                                              </Grid>
                                              
                                              <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={6}
                                    >
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">status</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.status}
                                            label="status"
                                            name="status"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            InputProps={{
                                              readOnly: !editable,
                                            }}
                                            >
                                            <MenuItem value={"active"}>Active</MenuItem>
                                            <MenuItem value={"inactive"}>Inactive</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    
                                     <Grid
                                            item
                                            xs={12}
                                            md={6}
                                            lg={6}
                                          >
                                              <TextField
                                                  error={Boolean(touched.comment && errors.comment)}
                                                  fullWidth
                                                  helperText={touched.comment && errors.comment}
                                                  label="comment"
                                                  name="comment"
                                                  onBlur={handleBlur}
                                                  onChange={handleChange}
                                                  value={values.comment}
                                                  variant="outlined"
                                                  InputProps={{
                                                    readOnly: !editable,
                                                  }}
                                              /></Grid> 
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
       action={deleteProject}
       selectedData={selectedData}
       setEditable={setEditable}
       setSelectedData={setSelectedData}
       setCreateOpen={setCreateOpen}


      />
    </>
  )
}


CreateUpdateProject.propTypes = {
    setCreateOpen: PropTypes.func,
    selectedData: PropTypes.object,
    editable: PropTypes.bool,
    setEditable: PropTypes.func,
    warn: PropTypes.bool,
    SetWarn: PropTypes.func,
}

export default CreateUpdateProject;

