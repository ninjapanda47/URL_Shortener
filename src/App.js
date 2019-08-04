import React, {
  Component
} from 'react';
import {
  Container, Row, Col, Card, Form, Button
} from 'react-bootstrap';
import './App.css';
import * as api from "./utils/api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      newUrl: '',
      returnedResult: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ url: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let data = this.state.url;
    api.shortURL(data).then(res => this.setState({ newUrl: res }, this.setState({ returnedResult: true }))
    )
    this.setState({ url: '' });

  }

  render() {

    function Result(props) {
      return (<Card className="main">
        <Card.Body>
          <Card.Title>
            New URL
          </Card.Title>
          <Card.Link href={props.result ? props.result : ''} target='_blank'>{props.result ? props.result : ''}</Card.Link>
        </Card.Body>
      </Card>)
    }

    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <h1>URL SHORTENER</h1>
              <Card className="main">
                <Card.Body>
                  <Card.Title>
                    Original URL
                  </Card.Title>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                      <Form.Control type="text" value={this.state.url} onChange={this.handleChange} placeholder="Really long URL" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                  </Form>
                </Card.Body>
              </Card>
              {this.state.returnedResult ? <Result result={this.state.newUrl} /> : null}
            </Col>
          </Row>
          <Row>
            <Col className="footer">
              <p>© 2018 sandigau.com</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;