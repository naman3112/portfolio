import Rcube from '../../assets/img/internship/rcube.png'
import OSI from '../../assets/img/internship/osi.png'
import modelbit from '../../assets/img/internship/modelbit.jpeg'
import alignInfo from '../../assets/img/internship/alignInfo.png'
import universal from '../../assets/img/internship/universal.jpeg'
export const internships = [
    
    {
        title: 'Software Developer(React JS)',
        company: 'Universal inovators',
        desc: [
           '• Developed website for their conference using Reactjs from scratch',
           '• Website for their UK conference https://icccn.co.uk/ ',
           '• Website for their Patent conference https://iciip-patent.com/',
        ],
        img: universal,
        imgAlt: "Universal inovators"
    },
    {
        title: 'Software Developer(React Native)',
        company: 'Align Books info pvt ltd.',
        desc: [
           '• Worked closely with their solution architect',
           '• Built different functionalities for their React native application',
        ],
        img: alignInfo,
        imgAlt: "AlignInfo"
    },
    
    {
        title: 'Software Developer(Backend)',
        company: 'ModelBit technology',
        desc: [
           '• Worked Upon REST APIs that were built in NodeJs for performing CRUD operations',
           '• Sorting and pagination queries were written using Aggregate function of MongoDb Explored',
           '• Implemented GeoJSON Functions that performs filtering on basis of location',
        ],
        img: modelbit,
        imgAlt: "ModelBit"
    },
    
]