function GetVersion() {

    return 1.2;
}

function GetHelpAndAboutContent() {

    let Content = `
        <div class="HelpAndAboutContainer">
            <p><span>Project:</span> Community helper</p>
            <p><span>Version:</span> ${GetVersion()}</p>
            <p><span>Author:</span> Callum Martin</p>
            <p><span>Admins:</span> Callum Martin</p>
            <p><span>Description:</span> Aligns the input and output of MDS.</p>
            <p><span>Report an issue:</span> Contact an admin via email.</p>
        </div>
    `;

    return Content;
}