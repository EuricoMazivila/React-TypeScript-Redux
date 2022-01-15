import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col, Spinner
} from "reactstrap";
import {ILogin} from "../models/login";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {loginAction} from "../store/actionCreators/login.actionCreator";
import {useTypeSelector} from "../hooks/useTypeSelector";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginData, setLoginData] = useState<ILogin>();
    const {login,isLoading,errorMessage} = useTypeSelector((state) => state.login);

    const dispatch = useDispatch();
    const history = useHistory();

    const loginHandler = () => {
        dispatch(loginAction(email,password));
    }

    useEffect(() => {
        setLoginData(login);

        if(loginData?.token || localStorage.getItem('user')){
            history.push("/admin/dashboard")
        }
    },[login, history, loginData?.token])

    useEffect(() => {
        if (errorMessage){
            alert("Error of Login" + errorMessage)
        }
    },[errorMessage])

    return(
        <>
            <Col lg="4" md="4">
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <small> Inicie a sessão na sua conta </small>
                        </div>
                        <Form role="form">
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        autoComplete="new-email"
                                        value={email}
                                        onChange={ e => setEmail(e.target.value)}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Senha"
                                        type="password"
                                        autoComplete="new-password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <div>
                                <Button
                                    block
                                    className="my-2"
                                    size="lg"
                                    color="success"
                                    type="button"
                                    onClick={loginHandler}
                                >
                                    Iniciar
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
                <Row className="mt-3">
                    <Col className="text-center">
                        <a
                            className="text-success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            <small >Não consegue iniciar a sessão??</small>
                        </a>
                    </Col>

                </Row>
            </Col>
            {
                isLoading &&
                <Spinner type="border"/>
            }
        </>
    )
}

export default Login;
