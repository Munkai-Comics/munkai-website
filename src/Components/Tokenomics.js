import Title from "./Title"
import Chart from '../images/chart.png';

function Tokenomics() {

	return(

			<div className="body-content tokenomics" id="tokenomics">
				<Title text="Tokenomics"/>

				<div className="tokens d-flex">
						
						<div className="token-box">
							<h1 className="token-title">MUNKAI TOKENS</h1>

							<p className="token-description"> 
								The Munkai token $MUNK would be earned as a reward for reading content on the platform and 
								staked to earn BUSD which readers can then use for purchases.<br/>
								The stable coin $BUSD will be used for purchases in the merchant section of the platform. 
							</p>
						</div>

						<div className="token-box">
							<p className="chart-description">
								There is a 5% buy and sell tax on the $MUNK token and a total supply of  60,000,000 
								$MUNK which would be distributed as follows:
							</p>

							<img alt="chart" className="chart" src={Chart} />

						</div>
				</div>
			</div>
	)

}


export default Tokenomics