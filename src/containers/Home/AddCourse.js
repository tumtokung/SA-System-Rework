import React, { useEffect, useState } from 'react';
import Papa from "papaparse";
import { Box, Typography, Stack, Button, Alert, Slide, IconButton, MenuItem, Select } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useAddCourse } from './styles';
import ArticleIcon from '@mui/icons-material/Article';
import { AccordionCourse, SelectBar } from '@/components';
import DownloadIcon from '@mui/icons-material/Download';
import useDownloader from "react-use-downloader";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

function AddCourse() {
    //hooks
    const { download, error } = useDownloader();
    const [errorShow, setErrorShow] = useState(null);
    const [file, setFile] = useState(null);
    const [termList] = useState([{ label: "กลางภาค", value: "กลางภาค" },
    { label: "ปลายภาค", value: "ปลายภาค" }]);
    const [year, setYear] = useState(null);
    const [term, setTerm] = useState("");
    const [major, setMajor] = useState(null);
    const [previewCourse, setPreviewCourse] = useState([]);

    useEffect(() => {
        if (error) {
            showError(error.errorMessage)
        }
    }, [error])

    // variable
    const classes = useAddCourse()
    const csvUrl = "/HeaderForm.csv";
    const csvName = "HeaderForm.csv";

    //function
    const showError = error => {
        setErrorShow({ error: error, isShow: true })
    }
    const clearError = () => {
        setErrorShow(null)
    }

    const changeHandler = (event) => {
        if(event){
            setFile(event.target.files[0].name);
        }
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                console.log("Papa.parse >> ", results.data)
                setPreviewCourse(results.data)
            },
        });
    };

    const handleYear = (event) => setYear(event.target.value);
    const handleTerm = (event) => setTerm(event.target.value);
    const handleMajor = (event) => setMajor(event.target.value);

    return (
        <Box sx={{ pt: 4 }}>
            {/* <Button onClick={handleClick}>
                Upload a file
            </Button> */}
            <Stack spacing={4} >
                {/* form */}
                <Stack flexDirection="row" justifyContent="space-between" sx={{ flexWrap: "wrap" }}>
                    <Button variant="contained" color="success" onClick={() => download(csvUrl, csvName)}>
                        <DownloadIcon />
                        ดาวน์โหลดไฟล์ csv
                    </Button>
                    <label onChange={changeHandler} htmlFor="formId" className={classes.inputFile}>
                        {file ?
                            <ArticleIcon fontSize="large" sx={{ mr: 2 }} />
                            :
                            <FileUploadIcon fontSize="large" sx={{ mr: 2, color: "gray" }} />
                        }
                        <Typography color={file ? "black" : "gray"} variant="body2">
                            {file ? file : "Upload file Csv"}
                        </Typography>
                        <input
                            type="file"
                            name="course"
                            accept=".csv"
                            id="formId"
                            hidden
                        />
                    </label>
                    <Select
                        value={term}
                        onChange={handleTerm}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{ height: 50, bgcolor: "white.main" }}
                    >

                        <MenuItem value="" disabled> ภาคเรียน </MenuItem>
                        {termList.map((menu, index) => {
                            return <MenuItem value={menu.value} key={index}>{menu.label}</MenuItem>
                        })}
                    </Select>
                    {/* <SelectBar /> */}
                    {/* <SelectBar value={""} placeholder="ภาคเรียน" menuList={[]} handleChang={handleTerm}/> */}
                    {/* <SelectBar /> */}
                </Stack>
                {/* error */}
                <Slide in={errorShow?.isShow} direction="right">
                    <Alert variant="outlined" severity="error" sx={{ position: "absolute", bottom: "5%", left: "6%" }} action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={clearError}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    >
                        {errorShow?.error}
                    </Alert>
                </Slide>

                {previewCourse.length > 0 &&
                    <Box>
                        <Stack flexDirection="row" justifyContent="space-between"  alignItems="center" sx={{ mb: 4 }}>
                            <Typography variant='body2'>
                                ตัวอย่าง
                            </Typography>
                            <Typography variant='body2' color="#27A5DF">
                                ขอนิสิตไม่ได้จะไม่ถูกเพิ่มในรายวิชา
                            </Typography>
                        </Stack>
                        <Box sx={{ height: "50vh", overflow: "scroll" }}>
                            {previewCourse.map((course, index) => {
                                return <AccordionCourse course={course} key={index} term={term} />
                            })}
                        </Box>
                        <Stack sx={{width: "100%", mt: 4}} alignItems="end">
                            <Button variant="contained" color="success">
                                <AddIcon />
                                เพิ่มรายวิชา
                            </Button>
                        </Stack>
                    </Box>
                }

            </Stack>
        </Box>
    )
}

export default AddCourse