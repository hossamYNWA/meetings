import NewMeetupForm from "../../components/meetings/NewMeetupForm";

export default function NewMeetupPage() {
  function addHandler(data) {
    console.log(data);
  }
  return <NewMeetupForm onAddMeetup={addHandler} />;
}
