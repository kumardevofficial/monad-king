import secondimg from "../../assets/2.png";
import thirdimg from "../../assets/3.png";
import fourthimg from "../../assets/4.png";
import fifthimg from "../../assets/5.png";
import sixthimg from "../../assets/6.png";
import seventhimg from "../../assets/7.png";
import eighthimg from "../../assets/8.png";
import ninthimg from "../../assets/9.png";
import tenthimg from "../../assets/10.png";
import eleventhimg from "../../assets/11.png";
import twelfthimg from "../../assets/12.png";
import thirteenthimg from "../../assets/13.png";
import fourteenthimg from "../../assets/14.png";
import fifteenthimg from "../../assets/15.png";
import sixteenthimg from "../../assets/16.png";

const images = [
  secondimg,
  thirdimg,
  fourthimg,
  fifthimg,
  sixthimg,
  seventhimg,
  eighthimg,
  ninthimg,
  tenthimg,
  eleventhimg,
  twelfthimg,
  thirteenthimg,
  fourteenthimg,
  fifteenthimg,
  sixteenthimg,
];

const FirstIm = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {images.map((img, index) => (
        <div key={index} className="w-[300px] p-2">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={img}
              alt={`Product ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FirstIm;
