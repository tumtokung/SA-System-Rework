const STUDENT_DOMAIN_NAME = "@ku.th";
const TEACHER_DOMAIN_NAME = process.env.NEXT_PUBLIC_DEVELOPMENT  == "STG" ? "@gmail.com" : "@eng.src.ku.ac.th" ;

export { STUDENT_DOMAIN_NAME, TEACHER_DOMAIN_NAME };