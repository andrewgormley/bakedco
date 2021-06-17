import React from "react";
import format from "date-fns/format";

export default class AboutPreview extends React.Component {
  render() {

    const {entry, widgetsFor, getAsset} = this.props;

    return (
      <div className="animate__animated animate__fadeIn test px-2">
        <div className="max-w-5xl mx-auto pt-20 pb-10">
          <p className="max-w-none font-semibold">{ entry.getIn(["data", "title"])}</p>
          <p className="max-w-none text-4xl normal-case">{ entry.getIn(["data", "intro"])}</p>
        </div>

        <div className="about-grid py-2 grid grid-cols-8 grid-rows-9 auto-rows-max gap-2">
          <div className="bg-cover bg-center bg-red-200 col-span-3 col-start-1 row-span-8" style={{backgroundImage: 'url(' + this.props.widgetsFor('imageRow1')[0][0] + ')'}}></div>
          <div className="bg-cover bg-center bg-red-200 col-span-2 col-start-4 row-span-3 row-start-2" style={{backgroundImage: 'url(' + this.props.widgetsFor('imageRow1')[1][0] + ')'}}></div>
          <div className="bg-cover bg-center bg-red-200 col-span-2 col-start-4 row-span-6" style={{backgroundImage: 'url(' + this.props.widgetsFor('imageRow1')[2][0] + ')'}}></div>
          <div className="bg-cover bg-center bg-red-200 col-span-1 col-start-6 row-span-6 row-start-3" style={{backgroundImage: 'url(' + this.props.widgetsFor('imageRow1')[3][0] + ')'}}></div>
          <div className="bg-cover bg-center bg-red-200 col-span-2 col-start-7 row-span-6 row-start-1" style={{backgroundImage: 'url(' + this.props.widgetsFor('imageRow1')[4][0] + ')'}}></div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-wrap pt-20">
          <div className="w-full mb-10 font-semibold lg:px-4">
            Services:
          </div>
          <div className="w-full flex flex-wrap">
            {this.props.widgetsFor('services').map(function(service, index) {
              return (
                <div className="w-full lg:w-1/3 lg:px-4" key={index}>
                  <p className="normal-case">
                    <strong className="uppercase">{service.getIn(['data', 'title'])}</strong><br/>
                    {service.getIn(['data', 'description'])}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="about-grid grid grid-cols-9 grid-rows-9 auto-rows-max gap-2">
          <div className="bg-red-200 col-span-3 col-start-1 row-span-6 row-start-2" style={{backgroundImage: 'url(' + this.props.widgetsFor('imageRow2')[0][0] + ')'}}></div>
          <div className="bg-red-200 col-span-3 col-start-4 row-span-8 row-start-1" style={{backgroundImage: 'url(' + this.props.widgetsFor('imageRow2')[1][0] + ')'}}></div>
          <div className="bg-red-200 col-span-3 col-start-7 row-span-3 row-start-3" style={{backgroundImage: 'url(' + this.props.widgetsFor('imageRow2')[2][0] + ')'}}></div>
          <div className="bg-red-200 col-span-3 col-start-7 row-span-4 row-start-6" style={{backgroundImage: 'url(' + this.props.widgetsFor('imageRow2')[3][0] + ')'}}></div>
        </div>

        <div class="max-w-5xl mx-auto flex flex-wrap py-20">
          <div class="w-full lg:w-1/5 mb-10 font-semibold">
            Our Values
          </div>
          <div class="w-full lg:w-4/5">
            {this.props.widgetsFor('values').map(function(value, index) {
              return (
                <p class="normal-case">
                  <strong class="uppercase">{value.getIn(['data', 'title'])}</strong><br/>
                  {value.getIn(['data', 'description'])}
                </p>
              );
            })}
          </div>
        </div>

        <div className="about-grid grid grid-cols-3 grid-rows-9 auto-rows-max gap-2 pb-20">
          <div className="bg-red-200 col-start-1 row-span-4 row-start-2" style={{backgroundImage: 'url(' + this.props.widgetsFor('imageRow3')[0][0] + ')'}}></div>
          <div className="bg-red-200 col-start-1 row-span-3 row-start-6 " style={{backgroundImage: 'url(' + this.props.widgetsFor('imageRow3')[1][0] + ')'}}></div>
          <div className="bg-red-200 col-start-2 row-span-9" style={{backgroundImage: 'url(' + this.props.widgetsFor('imageRow3')[2][0] + ')'}}></div>
          <div className="bg-red-200 col-start-3 row-span-6 row-start-3" style={{backgroundImage: 'url(' + this.props.widgetsFor('imageRow3')[3][0] + ')'}}></div>
        </div>

      </div>
    );
  }
}
