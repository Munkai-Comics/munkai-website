
function Title( {text, darkBg} ) {
		
		return(
				<div className={`title-box d-flex ${darkBg? "dark-bg" : ""}`}>
					<h1 className="top-title">{text}</h1>
				</div>
		)
}

export default Title