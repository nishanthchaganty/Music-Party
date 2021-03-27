import React, {Component} from 'react';
import { render } from "react-dom";
import { Button, Grid, Typography, TextField, FormHelperText, FormControl } from '@material-ui/core';
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";


export default class CreateRoomPage extends Component{
    defaultVotes = 2;


    constructor(props){
        super(props);
        // Everytime we make an update to this state, it forces the component to update. 
        this.state = {
            guestCanPause: true,
            votesToSkip: this.defaultVotes
        }

        // Binding this method to the class so we can use this when called from DOM  
        this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this)

        this.handleVotesChange =  this.handleVotesChange.bind(this);

        this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
    }

    // e: the object that called this function. Gets the value from the object called and assigns it to votesToSkip
    // Need to bind this methods because we are using the 'this' keyword inside the handleVotesChange method
    handleVotesChange(e){
        this.setState({
            votesToSkip: e.target.value,
        });
    }

    // default vlaues are strings. 
    // Same here. Binding required inorder to use the this keyword inside the method 
    handleGuestCanPauseChange(e){
        this.setState({
            guestCanPause: e.target.value === "true" ? true : false, 
        });
        }



    handleRoomButtonPressed() {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            votes_to_skip: this.state.votesToSkip,
            guest_can_pause: this.state.guestCanPause,
          }),
        };
        fetch("api/create-room", requestOptions).then((response) => response.json()).then((data) => console.log(data));
      }
    render(){
        // Spacing: How much spacing should be kept between items in a grid. 1 for 8 pixels. Holds containers vertically,
        // used to align text 
        return( <Grid container spacing={1}>
             {/* xs=12 maximize to the current width of the screen  */}
            <Grid item xs={12} align="center">
                <Typography component = 'h4' variant='h4'>
                    Create A Room
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                {/* Used for inserting forms of various types */}
                <FormControl component = "fieldset">
                    <FormHelperText>
                        <div align = 'center'>
                            Guest control of Playback State
                        </div>
                    </FormHelperText>
                    <RadioGroup 
                        row
                        defaultValue="true" 
                        onChange={this.handleGuestCanPauseChange}>
                        {/* Personal Notes for future reference */}
                        {/* Have a label for our control buttons. acts as a wrapper for our radio buttons.*/}
                        {/* true for value denotes yes, the users will have controlover music play */}
                        {/* RadioGroup is a helpful wrapper used to group Radio components that provides an easier API, 
                        and proper keyboard accessibility to the group. Radio buttons allows the user to select one option from a set */}
                        {/* Learn more about radio classes from material-ui here: https://material-ui.com/components/radio-buttons/ */}
                        <FormControlLabel
                            value="true" 
                            control ={<Radio color="primary" />} 
                            label = "Play/Pause"
                            labelplacement="bottom"
                            />
                        <FormControlLabel 
                            value="false" 
                            control ={<Radio color="secondary" />} 
                            label = "No control"
                            labelplacement="bottom"
                            />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl >
                    <TextField 
                    required={true} 
                    type="number" 
                    onChange={this.handleVotesChange}
                    defaultValue={this.defaultVotes}
                    inputProps={{
                        min:1,   
                        style: {textAlign: 'center'}                     
                    }} />
                    <FormHelperText>
                        <div align='center'>
                            Votes Required to skip song
                        </div>
                    </FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="primary" variant="contained" onClick={this.handleRoomButtonPressed}>
                        Create a room
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    {/* compoent = link means the button acts as a link  */}
                    <Button color="secondary" variant="contained" to="/" component={Link}>
                        Back
                    </Button>
                </Grid>
            </Grid>
    
        );
     
    }
}