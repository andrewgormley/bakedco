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

        <div class="about-grid about-grid-1 py-2 grid grid-cols-8 grid-rows-9 auto-rows-max gap-2">
          {this.props.widgetsFor('imageRow1').map(function(item, index) {
            return (
              <div class="bg-red-200 bg-cover bg-center" style={{backgroundImage: `url(${service.getIn(['item', 'image'])})`}} key={index}></div>
            );
          })}
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

        <div class="about-grid about-grid-2 py-2 grid grid-cols-8 grid-rows-9 auto-rows-max gap-2">
          {this.props.widgetsFor('imageRow1').map(function(item, index) {
            return (
              <div class="bg-red-200 bg-cover bg-center" style={{backgroundImage: `url(${service.getIn(['item', 'image'])})`}} key={index}></div>
            );
          })}
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

        <div class="about-grid about-grid-3 py-2 grid grid-cols-8 grid-rows-9 auto-rows-max gap-2">
          {this.props.widgetsFor('imageRow1').map(function(item, index) {
            return (
              <div class="bg-red-200 bg-cover bg-center" style={{backgroundImage: `url(${service.getIn(['item', 'image'])})`}} key={index}></div>
            );
          })}
        </div>

      </div>
    );
  }
}
