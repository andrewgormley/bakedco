import React from "react";
import format from "date-fns/format";

export default class WorkPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return
      <div className="animate__animated animate__fadeIn p-2">
        <div className="border border-solid border-gray-900 dark:border-white overflow-hidden">

          <div class="marquee2" data-duplicated='true' data-direction='left' data-pauseOnHover='false' data-gap='200' data-speed='100' data-startVisible='true'>
            <span class="text-9xl font-semibold">{ entry.getIn(["data", "title"])}</span>
          </div>

          <div class="w-full flex flex-row font-semibold border-t border-b border-gray-900 dark:border-white">
            <div class="p-5 w-1/2">
              { format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }
            </div>
            <div class="p-5 w-1/2 border-l border-solid border-gray-900 dark:border-white">
              { entry.getIn(["data", "tags"])}
            </div>
          </div>

          <div class="max-w-5xl mx-auto py-10 text-4xl normal-case p-5">
            { entry.getIn(["data", "description"])}
          </div>

          // <div className="cms mw6">
          //   <p>{ entry.getIn(["data", "description"]) }</p>
          //   { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
          //   { widgetFor("body") }
          // </div>

        </div>
      </div>
  }
}
