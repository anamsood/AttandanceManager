import "./Subject.css";

export default function Subject({ title, total, attended }) {
  const desiredAttendance = 75;
  const currPercentage = Math.round((attended / total) * 100);
  let percentage = currPercentage;
  let totalClasses = total;
  let toAttend = attended;
  let reqClasses = 0;

  while (percentage < desiredAttendance) {
    toAttend++;
    totalClasses++;
    percentage = (toAttend / totalClasses) * 100;
    reqClasses++;
  }

  return (
    <div className="item">
      <div id="subject">
        <span>
          {" "}
          <h2>{title}</h2>
        </span>
        <span className="subj-detail">
          {" "}
          <p>attended-{attended}</p>
          <p>total-{total}</p>
          <h4>must attend {reqClasses} more</h4>
        </span>
      </div>
      <div id="percentage">
        <h2>{currPercentage}%</h2>
        <h5>last updated-15/12/23</h5>
      </div>
    </div>
  );
}
