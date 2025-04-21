import MeetupList from "../components/meetings/MeetupList";

const dummyData = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://img.peerspace.com/image/upload/ar_1.5,c_fill,g_auto,f_auto,q_auto,dpr_auto,w_3840/yiascmv5nwyurhqqe0rb",
    address: "someplace 5, street, area",
    description: "the first meeting is so exciting!",
  },
];
export default function mainPage() {
  return <MeetupList meetups={dummyData} />;
}
