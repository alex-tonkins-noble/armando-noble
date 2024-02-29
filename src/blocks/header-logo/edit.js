import "./editor.scss";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
// import logo from "../../../assets/images/noble-logo.svg";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl, ColorPalette } from "@wordpress/components";
import { useSelect } from "@wordpress/data";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { disableHover, backgroundColor, logoColor } = attributes;

	// Add any additional props to the top-level Block Props here.
	const additionalWrapperProps = {
		style: { backgroundColor: backgroundColor },
	};

	// Define the block props to merge in with the inner block props
	const blockProps = useBlockProps(additionalWrapperProps);

	// Using the block-editor data store, get all of the available image sizes within the theme
	const themeColors = useSelect((select) => {
		const { colors } = select("core/block-editor").getSettings();

		return colors;
	}, []);

	const logoBackgroundColorStyle = logoColor ? { background: logoColor } : {};

	const handleDisableLogoHover = (val) => {
		setAttributes({ disableHover: val });
	};

	const handleBackgroundColorChange = (val) => {
		setAttributes({ backgroundColor: val });
	};

	const handleLogoColorChange = (val) => {
		setAttributes({ logoColor: val });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Logo Options", "np-header-logo")}>
					<ToggleControl
						label={__("Disable Logo Hover", "np-header-logo")}
						help={__(
							"By default, the logo will have a horizontal hover effect where the BB will slide into view - tick to disable this.",
							"np-header-logo"
						)}
						checked={disableHover}
						onChange={handleDisableLogoHover}
					/>

					<div className="color-palette-wrapper">
						<label>{__("Background Color", "np-header-logo")}</label>
						<ColorPalette
							colors={themeColors}
							disableCustomColors={true}
							value={backgroundColor}
							onChange={handleBackgroundColorChange}
						/>
					</div>

					<div className="color-palette-wrapper">
						<label>{__("Logo Color", "np-header-logo")}</label>
						<ColorPalette
							colors={themeColors}
							disableCustomColors={true}
							value={logoColor}
							onChange={handleLogoColorChange}
						/>
					</div>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="wp-block-np-header-logo__inner">
					{!disableHover && (
						<div className="logo-bb">
							<div
								className="logo-bb__img"
								style={logoBackgroundColorStyle}
							></div>
						</div>
					)}
					<div className="logo-img">
						<div
							className="logo-img__img"
							style={logoBackgroundColorStyle}
						></div>
					</div>
				</div>
			</div>
		</>
	);
}
