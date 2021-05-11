export default function QuestionCard(props) {
  return (
    <div className="card">
      <img src={this.props.img} />
      <div className="card-body">
        <h2>{this.props.title}</h2>

        <Button
          onClick={handleOpen}
          className="px-5"
          variant="outline-success"
          size="lg"
          block
        >
          <FaPlusCircle /> Add Question
        </Button>

        <AddQuestionModal show={show} handleClose={handleClose} />
      </div>
    </div>
  );
}
