import React from "react";
import format from "date-fns/format";

export default class WorkPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return (
      <div className="text-sm uppercase text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900 tracking-wide transition-all">
        <div className="animate__animated animate__fadeIn p-2">
          <div className="border border-solid border-gray-900 dark:border-white overflow-hidden">

            <div className="marquee2" data-duplicated='true' data-direction='left' data-pauseOnHover='false' data-gap='200' data-speed='100' data-startVisible='true'>
              <span className="text-9xl font-semibold">{ entry.getIn(["data", "title"])}</span>
            </div>

            <div className="w-full flex flex-row font-semibold border-t border-b border-gray-900 dark:border-white">
              <div className="p-5 w-1/2">
                { format(entry.getIn(["data", "date"]), "MMM D, YYYY") }
              </div>
              <div className="p-5 w-1/2 border-l border-solid border-gray-900 dark:border-white">
                { entry.getIn(["data", "tags"])}
              </div>
            </div>

            <div className="max-w-5xl mx-auto py-10 text-4xl normal-case p-5">
              { entry.getIn(["data", "description"])}
            </div>

            <div className="px-5">
              <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="{ entry.getIn(["data", "video"])}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>

            <div class="max-w-5xl mx-auto py-10 normal-case markdown p-5 flex flex-wrap">
              {entry.getIn(["data", "sections"]).map( item => {
                <div className="w-full md:w-1/2 p-2">
                  <h4 className="font-semibold mb-2">{item.subtitle}</h4>
                  <p>{item.copy}</p>
                </div>
              })}
            </div>

          </div>
        </div>
        <script type="text/javascript">
          $('.marquee2').marquee({});
        </script>
      </div>
    );
  }
}
