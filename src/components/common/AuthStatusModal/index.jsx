var React = require('react');
var Modal = require('react-modal');

var AuthActions = require('../../../actions/AuthActions');
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
 
var AuthStatusModal = React.createClass({
 
  getInitialState: function() {
    return { modalIsOpen: true };
  },
 
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
 
  closeModal: function() {
    AuthActions.hideModal();
    this.setState({modalIsOpen: false});
  },
 
  render: function() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var Month = new Array(12);
    Month[0] = "January";
    Month[1] = "February";
    Month[2] = "March";
    Month[3] = "April";
    Month[4] = "May";
    Month[5] = "June";
    Month[6] = "July";
    Month[7] = "August";
    Month[8] = "September";
    Month[9] = "October";
    Month[10] = "November";
    Month[11] = "December";
    
    var day = weekday[d.getDay()];
    var month = Month[d.getMonth()];
    var year = d.getFullYear();
    var x = d.getDate();
    var y = d.getDay();
    if(x < 6)
      var weekOfTheMonth = 1;
    else
      var weekOfTheMonth = Math.ceil((x - y)/7) + 1;

    
    var firstDayOfTheYear = new Date(year,0,1);
    var week = Math.ceil((((d - firstDayOfTheYear) / 86400000) + firstDayOfTheYear.getDay()+1)/7);

    return (
      <div>
       
        <div className="col-md-4 col-md-offset-4 welcome-panel">
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal} 
            style={customStyles}>
            <div className="panel panel-green">
              <div className="panel-heading">
                <center>{day}</center><br />
                <center>{x}th of {month}, {year}</center><br />
              </div>
              <div className="panel-body">
                Hello, Billy Bob!<br /><br />

                <center>
                <input className="form-control" placeholder="Password" ref="password" type="password" /><br /><br />
                <button className="btn btn-danger btn-xs" onClick={this.closeModal}>Lets get back</button>
                </center>
              </div>
              <div className="panel-footer">
                This is week #{week} <br />
                <a href="#">
                    <span className="pull-left">Show me my time-card </span>
                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                    <div className="clearfix"></div>
                </a>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  } 
});

export default AuthStatusModal;
