import React from "react";
// reactstrap components
import {
	Card,
	CardBody,
	CardFooter,
	CardTitle,
	Row,
	Col,
} from "reactstrap";
// core components

function Dashboard() {
	return (
		<>
			<div className="content">
				<Row>
					<Col xl="6
          " md="6" sm="8">
						<Card className="">
							<CardBody>
								<Row>
									<Col>
										<div className="numbers">
											<p className="card-category">SST</p>
											<CardTitle tag="p">Sistema de Suporte Técnico </CardTitle>
											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div>
									<p className="card-category">
										<i className="fas fa-sync-alt"> Utilizadores </i> 45
									</p>
									<p className="card-category">
										<i className="fas fa-sync-alt"> Novas notificações </i> 56
									</p>
									<p className="card-category">
										<i className="nc-icon nc-minimal-down">
											Painel Administrativo
										</i>
									</p>
								</div>
							</CardFooter>
						</Card>
						<Card className="">
							<CardBody>
								<Row>
									<Col>
										<div className="numbers">
											<p className="card-category">SGCA</p>
											<CardTitle tag="p">
												Sistema de Gestão de Calendário Académico
											</CardTitle>
											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div>
									<p className="card-category">
										<i className="fas fa-sync-alt"> Utilizadores </i> 45
									</p>
									<p className="card-category">
										<i className="fas fa-sync-alt"> Novas notificações </i> 56
									</p>
									<p className="card-category">
										<i className="nc-icon nc-minimal-down">
											Painel Administrativo
										</i>
									</p>
								</div>
							</CardFooter>
						</Card>
						<Card className="">
							<CardBody>
								<Row>
									<Col>
										<div className="numbers">
											<p className="card-category">SCP</p>
											<CardTitle tag="p">
												Sistema de Controle de Precedências
											</CardTitle>
											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div>
									<p className="card-category">
										<i className="fas fa-sync-alt"> Utilizadores </i> 45
									</p>
									<p className="card-category">
										<i className="fas fa-sync-alt"> Novas notificações </i> 56
									</p>
									<p className="card-category">
										<i className="nc-icon nc-minimal-down">
											Painel Administrativo
										</i>
									</p>
								</div>
							</CardFooter>
						</Card>
					</Col>
					<Col xl="6" md="6" sm="8">
						<Card className="">
							<CardBody>
								<Row>
									<Col>
										<div className="numbers">
											<p className="card-category">SPSP</p>
											<CardTitle tag="p">
												Sistema de Processamento de Sálarios do Pós-Laboral{" "}
											</CardTitle>
											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div>
									<p className="card-category">
										<i className="fas fa-sync-alt"> Utilizadores </i> 45
									</p>
									<p className="card-category">
										<i className="fas fa-sync-alt"> Novas notificações </i> 56
									</p>
									<p className="card-category">
										<i className="nc-icon nc-minimal-down">
											Painel Administrativo
										</i>
									</p>
								</div>
							</CardFooter>
						</Card>
						<Card className="">
							<CardBody>
								<Row>
									<Col>
										<div className="numbers">
											<p className="card-category">SGP</p>
											<CardTitle tag="p">
												Sistema de Gestão de Aquisições
											</CardTitle>
											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div>
									<p className="card-category">
										<i className="fas fa-sync-alt"> Utilizadores </i> 45
									</p>
									<p className="card-category">
										<i className="fas fa-sync-alt"> Novas notificações </i> 56
									</p>
									<p className="card-category">
										<i className="nc-icon nc-minimal-down">
											Painel Administrativo
										</i>
									</p>
								</div>
							</CardFooter>
						</Card>
						<Card className="">
							<CardBody>
								<Row>
									<Col>
										<div className="numbers">
											<p className="card-category">SIGA</p>
											<CardTitle tag="p">
												Sistema Integrado de Gestão Académica
											</CardTitle>
											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div>
									<p className="card-category">
										<i className="fas fa-sync-alt"> Utilizadores </i> 45
									</p>
									<p className="card-category">
										<i className="fas fa-sync-alt"> Novas notificações </i> 56
									</p>
									<p className="card-category">
										<i className="nc-icon nc-minimal-down">
											Painel Administrativo
										</i>
									</p>
								</div>
							</CardFooter>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Dashboard;
