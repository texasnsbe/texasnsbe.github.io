import blank_photo from '../Officers/Officer_Images/Blank Photo.jpg'
import daniel_akinola from '../Officers/New_Officer_Photos/Daniel.jpg'
import angel_achar from '../Officers/New_Officer_Photos/Angel.jpg'
import david_udoh from '../Officers/New_Officer_Photos/DavidU.jpg'
import kevin_uduji from '../Officers/New_Officer_Photos/Kevin.jpg'
import sidney_abdullah from '../Officers/New_Officer_Photos/Sidney.jpg'
import prince_fofanah from '../Officers/New_Officer_Photos/Alvin.jpg'
import chancellor_joseph from '../Officers/New_Officer_Photos/Chancellor.jpg'
import jasmin_addy from '../Officers/New_Officer_Photos/Jasmin.jpg'
import damion_norment from '../Officers/New_Officer_Photos/Damien.jpg'
import ganiat_ogidan from '../Officers/New_Officer_Photos/Ganiat.jpg'
import ngozi_onya from '../Officers/New_Officer_Photos/Ngozi.jpg'
import kilali_latter from '../Officers/New_Officer_Photos/Kilali.jpg'
import naomi_tefera from '../Officers/New_Officer_Photos/Naomi.jpg'
import faith_hypolite from '../Officers/New_Officer_Photos/Faith.jpg'
import hewan_abunei from '../Officers/New_Officer_Photos/Hewan.jpg'
import isabella_soares from '../Officers/New_Officer_Photos/Isabella.jpg'
import ashauntee_fairley from '../Officers/New_Officer_Photos/Ashauntee.jpg'
import anna_martinez from '../Officers/New_Officer_Photos/Anna.jpg'
import jorden_davis from '../Officers/New_Officer_Photos/Jorden.jpg'
import joshua_chikosha from '../Officers/New_Officer_Photos/Joshua.jpg'

const officers = [
  {
    id: "Finance Zone",
    name: 'Daniel Akinola',
    role: 'Finance Chair',
    linkedin: "https://www.linkedin.com/in/danielaakinola/",
    imageUrl:
      daniel_akinola,
  },
{
    id: "Communications Zone",
    name: 'Kevin Uduji',
    role: 'Telecommunications',
    linkedin: "https://www.linkedin.com/in/kevinuduji/",
    imageUrl:
      kevin_uduji,
  },
  {
    id: "Communications Zone",
    name: 'Angel Achar',
    role: 'Public Relations',
    linkedin: "https://www.linkedin.com/in/angel-a-0a2766284/",
    imageUrl:
      angel_achar,
  },
  {
    id: "Programs Zone",
    name: 'David Udoh',
    role: 'Athletics Chair',
    linkedin: "https://www.linkedin.com/in/davidudoh/",
    imageUrl:
      david_udoh,
  },
  {
    id: "Finance Zone",
    name: 'Sidney Abdullah',
    role: 'Corporate Liason',
    linkedin: "https://www.linkedin.com/in/sidney-abdullah-b4bb80238/",
    imageUrl:
      sidney_abdullah,
  },

  {
    id: "Membership Zone",
    name: 'Prince A Fofanah',
    role: 'Professional Development',
    linkedin: "https://www.linkedin.com/in/prince-alvin-fofanah-142090217/",
    imageUrl:
      prince_fofanah,
  },
{
  id: "Communications Zone",
  name: 'Jasmin Addy',
  role: 'Cockrell Relations',
  linkedin: "https://www.linkedin.com/in/jasminaddy/",
  imageUrl:
    jasmin_addy,
},
{
  id: "Membership Zone",
  name: 'Damion Norment',
  role: 'Membership Chair',
  linkedin: "https://www.linkedin.com/in/damion-norment-/",
  imageUrl:
    damion_norment,
},
{
  id: "Communications Zone",
  name: 'Ganiat Ogidan',
  role: 'Historian',
  linkedin: "https://www.linkedin.com/in/ganiat-ogidan/",
  imageUrl:
    ganiat_ogidan,
},
{
  id: "Membership Zone",
  name: 'Ngozi Onya',
  role: 'BWISE Coordinator ',
  linkedin: "https://www.linkedin.com/in/ngozionya/",
  imageUrl:
    ngozi_onya,
},
{
  id: "Membership Zone",
  name: 'Kilali Latter',
  role: 'Membership Chair',
  linkedin: "https://www.linkedin.com/in/kilali-latter-83871827b/",
  imageUrl:
    kilali_latter,
},
{
  id: "Finance Zone",
  name: 'Naomi Tefera',
  role: 'Conference Planner',
  linkedin: "",
  imageUrl:
    naomi_tefera,
},
{
  id: "Programs Zone",
  name: 'Faith Hypolite',
  role: 'Social Chair',
  linkedin: "https://www.linkedin.com/in/faith-hypolite-a46910297/",
  imageUrl:
    faith_hypolite,
},
{
  id: "Programs Zone",
  name: 'Hewan Abunei',
  role: 'Social Chair',
  linkedin: "https://www.linkedin.com/in/hewan-abunei-818a1428b/",
  imageUrl:
    hewan_abunei,
},
{
  id: "Programs Zone",
  name: 'Isabella Soares',
  role: 'TORCH Chair',
  linkedin: "https://www.linkedin.com/in/isabella-b-soares/",
  imageUrl:
    isabella_soares,
},
{
  id: "Programs Zone",
  name: 'Ashauntee Fairley',
  role: 'PCI Torch Chair',
  linkedin: "https://www.linkedin.com/in/ashaunteefairley/",
  imageUrl:
    ashauntee_fairley,
},
{
  id: "Membership Zone",
  name: 'Anna Martinez',
  role: 'FAT Advisor',
  linkedin: "https://www.linkedin.com/in/anna-martinez-4a977a21b/",
  imageUrl:
    anna_martinez,
},
{
  id: "Communications Zone",
  name: 'Jorden Davis',
  role: 'Public Relations',
  linkedin: "",
  imageUrl:
    jorden_davis,
},
{
  id: "Membership Zone",
  name: 'Chancellor Joseph',
  role: 'Academic Excellence',
  linkedin: "https://www.linkedin.com/in/chancellor-joseph-38586113a/",
  imageUrl:
    chancellor_joseph,
},
{
  id: "Finance Zone",
  name: 'Joshua Chikosha',
  role: 'Conference Planner',
  linkedin: "https://www.linkedin.com/in/joshua-chikosha/",
  imageUrl:
    joshua_chikosha,
},
// {
//   id: "Membership",
//   name: 'Prince',
//   role: 'Professional',
//   imageUrl:
//     prince_fofanah,
// },
    // More people...
]

const sortedOfficers = officers.sort((a, b) => a.name.localeCompare(b.name));

export default officers