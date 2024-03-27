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

import BudgetContext from 'src/context/BudgetContext';
import ProjectContext from 'src/context/ProjectContext';
import SenarioContext from 'src/context/SenarioContext.jsx'


const CreateUpdateBudget = ({  selectedData,  name ,     editable, setEditable,}) => {
    const {setSelectedData,
       createBudget,
        updateBudget,
        setCreateOpen,
        deleteBudget,
        warn,
   
        SetWarn} = useContext(BudgetContext);
     
    const {senarioData} = useContext(SenarioContext);  
    const {projectData} = useContext(ProjectContext);
    
    const FormSchema = yup.object().shape({
        project : yup.string().required("Project is required"),
        budgetCode : yup.string().required("Budget Code is required"),
        owner: yup.string().required("Owner is required"),
        budgetDescription : yup.string().required("Budget Description is required"),
        catagory : yup.string().required("Catagory is required"),
        type : yup.string().required("Type is required"),
        rule : yup.string().required("Rule is required"),
        budgetAmount : yup.number().required("Budget Amount is required"),
        senario : yup.string().required("Senario is required"),
        // budgetType : yup.string().required("Budget Type is required"),
        // budgetStatus : yup.string().required("Budget Status is required"),
    });

    const handleSubmit = async (values) => {
        try {
            if (selectedData) {
              console.log(">>>>>000>>",selectedData._id, values);
              await updateBudget({selectedData: selectedData._id, values});
            }
            else {
              console.log(">>>>>>>0",values);

              await createBudget(values);
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

                            project : selectedData?.project._id || "",
                            budgetCode : selectedData?.budgetCode || "",
                            owner: selectedData?.owner || "",
                            budgetDescription : selectedData?.budgetDescription || "",
                            catagory : selectedData?.catagory || "",
                            type : selectedData?.type || "",
                            rule : selectedData?.rule || "",
                            budgetAmount : selectedData?.budgetAmount || "",
                            senario : selectedData?.senario?._id || "",

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
                                      xs={12}
                                      md={6}
                                  >
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">project</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        name="project"
                                                        value={values.project}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        InputProps={{
                                                          readOnly: !editable,
                                                        }}
                                                        error={Boolean(touched.project && errors.project)}
                                                        helperText={touched.project && errors.project}
                                                        >
                                                        {projectData.map((project) => (
                                                            <MenuItem value={project._id}>{project?.projectCode}</MenuItem>
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
                                      <TextField
                                        error={Boolean(touched.budgetCode && errors.budgetCode)}
                                        fullWidth
                                        helperText={touched.budgetCode && errors.budgetCode}
                                        label="budgetCode"
                                        name="budgetCode"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.budgetCode}
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
                                        error={Boolean(touched.owner && errors.owner)}
                                        fullWidth
                                        helperText={touched.owner && errors.owner}
                                        label="owner"
                                        name="owner"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.owner}
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
                                        error={Boolean(touched.budgetDescription && errors.budgetDescription)}
                                        fullWidth
                                        helperText={touched.budgetDescription && errors.budgetDescription}
                                        label="budgetDescription"
                                        name="budgetDescription"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.budgetDescription}
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
                                            error={Boolean(touched.catagory && errors.catagory)}
                                            fullWidth
                                            helperText={touched.catagory && errors.catagory}
                                            label="catagory"
                                            name="catagory"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.catagory}
                                            variant="outlined"
                                            rows={4}
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
                                            error={Boolean(touched.type && errors.type)}
                                            fullWidth
                                            helperText={touched.type && errors.type}
                                            label="type"
                                            name="type"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.type}
                                            variant="outlined"
                                            rows={4}
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
                                            error={Boolean(touched.rule && errors.rule)}
                                            fullWidth
                                            helperText={touched.rule && errors.rule}
                                            label="rule"
                                            name="rule"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.rule}
                                            variant="outlined"
                                            rows={4}
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
                                            error={Boolean(touched.budgetAmount && errors.budgetAmount)}
                                            fullWidth
                                            helperText={touched.budgetAmount && errors.budgetAmount}
                                            label="budgetAmount"
                                            name="budgetAmount"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.budgetAmount}
                                            variant="outlined"
                                            rows={4}
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
                                                        <InputLabel id="demo-simple-select-label">senario</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        name="senario"
                                                        value={values.senario}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        InputProps={{
                                                          readOnly: !editable,
                                                        }}
                                                        error={Boolean(touched.senario && errors.senario)}
                                                        helperText={touched.senario && errors.senario}
                                                        >
                                                        {senarioData.map((senarioDataa) => (
                                                            <MenuItem value={senarioDataa._id}>{senarioDataa?.SenarioCode}</MenuItem>
                                                        ))}
                                                        </Select>
                                                    </FormControl>
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
      action={deleteBudget}
      selectedData={selectedData}
      setEditable={setEditable}
      setSelectedData={setSelectedData}
      setCreateOpen={setCreateOpen}


      />
    </>
  )
}


CreateUpdateBudget.propTypes = {
  setCreateOpen: PropTypes.func,
  selectedData: PropTypes.object,
  editable: PropTypes.bool,
  setEditable: PropTypes.func,
  warn: PropTypes.bool,
  SetWarn: PropTypes.func,
};

export default CreateUpdateBudget;

