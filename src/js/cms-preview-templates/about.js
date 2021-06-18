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

        <div className="about-grid about-grid-1 py-2 grid grid-cols-8 grid-rows-9 auto-rows-max gap-2">
          {this.props.widgetsFor('imageRow1').map(function(item, index) {
            return (
              <div className="bg-red-200 bg-cover bg-center" style={{backgroundImage: `url(${getAsset(item.getIn(['data', 'image']))})`}} key={index}></div>
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

        <div className="flex flex-wrap py-5 lg:py-10 items-center">
          <div className="w-1/3">

            <svg className="mx-auto w-20 my-20" width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
            <path className="fill-current text-gray-900 dark:text-white" d="M99.8556 8.32597C99.5817 9.3503 99.298 10.3719 99.0412 11.3998C98.9718 11.6782 98.8439 11.7539 98.5682 11.7521C96.7728 11.7404 94.9763 11.7431 93.1809 11.7476C92.4025 11.7494 91.7728 12.0332 91.3863 12.7476C91.1601 13.1665 91.1745 13.5854 91.5169 13.9116C91.8716 14.2537 92.2611 14.5577 92.6791 14.8188C93.4385 15.2836 94.252 15.6629 95.0007 16.1449C95.6863 16.5863 96.3709 17.0566 96.9565 17.6188C98.0331 18.6521 98.3574 19.9764 98.152 21.4359C98.0106 22.4368 97.6772 23.3782 97.1989 24.2656C96.0358 26.4242 94.1511 27.5125 91.7764 27.6323C89.3358 27.7548 86.8845 27.6854 84.4385 27.6989C84.3682 27.6989 84.298 27.6818 84.1529 27.6629C84.2682 27.2404 84.3736 26.8593 84.4754 26.4773C84.6935 25.6629 84.9214 24.8503 85.1178 24.0296C85.1836 23.7548 85.3007 23.6674 85.5809 23.6692C87.3764 23.6809 89.1727 23.689 90.9682 23.6665C91.5087 23.6612 92.0471 23.599 92.5746 23.4809C93.2926 23.3179 93.6232 22.7647 93.7619 22.0782C93.8782 21.5034 93.589 21.0791 93.1773 20.7665C92.6331 20.3539 92.0412 19.9998 91.4601 19.6368C90.6232 19.1143 89.7448 18.6503 88.9421 18.08C87.9142 17.3521 87.0962 16.4134 86.9196 15.1143C86.8348 14.4707 86.8585 13.8175 86.9899 13.1818C87.7745 9.43228 90.9908 7.84849 93.6331 7.7584C95.68 7.68813 97.7313 7.73948 99.78 7.73858C99.8385 7.73858 99.8971 7.7539 99.9998 7.76831C99.9484 7.96651 99.9034 8.14669 99.8556 8.32597ZM86.1097 11.4305C86.0502 11.6719 85.9457 11.7476 85.6944 11.753C84.552 11.78 83.3953 11.7305 82.2709 11.8962C78.6538 12.4323 75.7718 15.5683 75.5169 19.1377C75.3268 21.8043 77.0034 23.635 79.6818 23.6719C80.7052 23.6863 81.7304 23.6746 82.7547 23.6755H83.2502C83.1115 24.1818 82.9872 24.6287 82.8682 25.0764C82.6673 25.8332 82.4637 26.5899 82.2745 27.3503C82.2151 27.5899 82.125 27.7125 81.8439 27.7071C80.4466 27.68 79.0448 27.7422 77.6529 27.6476C73.9583 27.3971 71.4268 25.0016 71.0935 21.4016C70.8601 18.88 71.5809 16.5692 72.7872 14.4107C74.8863 10.6584 78.1079 8.46111 82.3583 7.89264C83.8412 7.69444 85.3637 7.78183 86.8673 7.74129C86.9241 7.73948 86.9809 7.76741 87.0727 7.78994L86.77 8.91336C86.5475 9.7521 86.3178 10.589 86.1097 11.4305ZM67.6872 27.3043C67.6088 27.6071 67.4926 27.7125 67.1809 27.708C66.0115 27.6908 64.8421 27.7016 63.6727 27.6998C63.5448 27.6998 63.4169 27.6818 63.2358 27.6692L63.6439 26.0935L68.2016 8.56651C68.4178 7.73588 68.4187 7.73588 69.2727 7.73588C70.2736 7.73588 71.2736 7.73498 72.2745 7.73678C72.4169 7.73678 72.5583 7.74849 72.761 7.7566C72.4556 8.92597 72.1655 10.0314 71.8782 11.1377C70.4782 16.526 69.0764 21.9134 67.6872 27.3043ZM64.234 11.3737C64.1818 11.6674 64.0484 11.7557 63.7484 11.753C61.953 11.7411 60.1574 11.7396 58.3619 11.7485C57.6133 11.7503 56.9953 12.0188 56.6097 12.6962C56.3376 13.1737 56.3493 13.571 56.7439 13.9485C57.1151 14.3016 57.5385 14.6143 57.9773 14.8809C58.8421 15.4061 59.7385 15.8773 60.6106 16.3908C60.9511 16.5917 61.2718 16.8323 61.5827 17.0791C63.0439 18.2395 63.6412 19.7485 63.3259 21.5899C63.1196 22.7908 62.6881 23.9161 61.9935 24.9233C60.907 26.5007 59.3628 27.3377 57.498 27.5773C56.6772 27.6827 55.8412 27.6881 55.0115 27.6962C53.2998 27.7125 51.5881 27.7016 49.8772 27.6998C49.7232 27.6998 49.5691 27.6863 49.3556 27.6755C49.434 27.3566 49.4935 27.1007 49.561 26.8458C49.7998 25.9494 50.0592 25.0584 50.2718 24.1557C50.3592 23.7881 50.5025 23.6584 50.8971 23.6638C52.6682 23.689 54.4403 23.6827 56.2115 23.6692C56.6564 23.6666 57.1003 23.6268 57.5385 23.5503C58.07 23.4575 58.507 23.1971 58.7547 22.6818C59.1322 21.8989 59.0637 21.3215 58.3836 20.7827C57.8025 20.3215 57.1439 19.9566 56.5142 19.5584C55.67 19.0242 54.7845 18.5476 53.9818 17.9575C52.8727 17.1431 52.1205 16.0629 52.0304 14.6368C51.9556 13.4476 52.2962 12.3359 52.8655 11.3134C54.0556 9.17642 55.9718 8.12597 58.3313 7.79444C58.6989 7.74219 59.0763 7.73948 59.4493 7.73858C61.2205 7.73318 62.9926 7.73588 64.7637 7.73588H65.1998C64.9448 8.70525 64.7043 9.62237 64.461 10.5386C64.3872 10.8179 64.2836 11.0908 64.234 11.3737ZM47.9016 24.5827C47.6493 25.526 47.3899 26.4665 47.1475 27.4116C47.0926 27.626 46.9917 27.7052 46.7727 27.7034C43.952 27.6854 41.1322 27.6926 38.3124 27.6503C37.3529 27.6368 36.4349 27.3548 35.5845 26.8989C33.7286 25.9034 32.798 23.7791 33.2376 21.5575C33.6007 19.7251 34.6322 18.3152 36.0799 17.2034C38.0097 15.7206 40.1809 14.9007 42.6448 14.9431C43.6448 14.9602 44.6457 14.9314 45.6457 14.9539C45.9655 14.9611 46.098 14.8539 46.1484 14.5494C46.2295 14.0638 46.3908 13.5863 46.4241 13.0989C46.4718 12.398 46.0511 11.9287 45.361 11.8215C45.0633 11.775 44.7624 11.7509 44.461 11.7494C42.7133 11.7422 40.9655 11.7458 39.2178 11.7458H38.7322C39.0872 10.4269 39.416 9.18273 39.7709 7.94579C39.7989 7.84759 40.0169 7.74579 40.1475 7.74489C41.6664 7.73048 43.1854 7.73498 44.7043 7.73588C45.27 7.73588 45.8403 7.69984 46.4025 7.74669C48.2592 7.89984 49.7304 8.70435 50.5673 10.4269C51.1142 11.553 51.061 12.7521 50.7484 13.9341C49.8079 17.4863 48.852 21.0332 47.9016 24.5827ZM44.8061 18.9053C43.6142 18.9043 42.4205 18.8719 41.2295 18.9134C39.7772 18.9638 38.4196 20.0449 38.0646 21.3638C37.7421 22.5566 38.4097 23.5746 39.6349 23.6341C40.9079 23.6971 42.1863 23.6593 43.4628 23.6746C43.689 23.6782 43.7421 23.5476 43.7881 23.3719C44.1538 21.9872 44.525 20.6025 44.8908 19.2179C44.9151 19.1287 44.916 19.0332 44.9277 18.9395C44.8736 18.9242 44.8403 18.9053 44.8061 18.9053ZM25.107 21.435C22.4115 24.7152 19.3809 27.6377 15.8259 29.9827C13.7097 31.3782 11.4709 32.5152 8.97184 33.0539C7.20247 33.435 5.4331 33.4755 3.69977 32.8557C1.4268 32.0422 0.0628342 30.1215 0.000672067 27.7052C-0.0587874 25.344 0.706078 23.2242 1.89797 21.2368C3.35653 18.8062 5.29166 16.7971 7.49707 15.0413C10.1016 12.9665 12.9295 11.2764 16.1268 10.2962C17.1639 9.98407 18.2316 9.78472 19.3115 9.70165C20.0349 9.64309 20.8106 9.77192 21.5124 9.98453C23.1223 10.4719 23.8944 11.9809 23.4709 13.6161C23.4475 13.7062 23.4313 13.798 23.4124 13.889L23.4745 13.9269C23.7592 13.5593 24.0547 13.1989 24.3277 12.8224C25.5358 11.153 26.5899 9.40165 27.1457 7.39354C27.3466 6.66921 27.4926 5.93138 27.3673 5.18003C27.1286 3.753 26.2124 2.91156 24.8998 2.47102C23.5691 2.02417 22.2079 2.12237 20.8574 2.37102C18.2457 2.8521 15.8385 3.88723 13.5367 5.17912C12.5718 5.72057 11.6403 6.32237 10.6619 6.91606L10.3953 6.56021C10.7385 6.28633 11.0655 6.01156 11.407 5.7548C14.6043 3.34309 18.0601 1.44669 21.9772 0.489936C23.925 0.0142601 25.8944 -0.203758 27.879 0.245792C30.5259 0.844891 32.2286 2.90165 32.3935 5.61516C32.5232 7.74399 31.9493 9.72507 31.1592 11.6575C29.6872 15.253 27.561 18.4494 25.107 21.435ZM20.0709 11.7827C19.243 11.6791 18.4358 11.8215 17.6511 12.0683C14.389 13.0944 11.7827 15.08 9.59076 17.653C8.86734 18.5016 8.26283 19.4332 7.95833 20.5233C7.46283 22.2953 8.54391 23.7007 10.3637 23.6638C11.2953 23.6458 12.1754 23.3962 13.0097 23.008C16.0583 21.589 18.5556 19.453 20.7412 16.9341C21.3295 16.2566 21.7142 15.4431 21.9439 14.5656C22.3511 13.0052 21.6655 11.9818 20.0709 11.7827Z"/>
            </g>
            </svg>

            <svg className="mx-auto w-20 my-20" width="100" height="23" viewBox="0 0 100 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
            <path className="fill-current text-gray-900 dark:text-white" d="M89.3333 2.49632C89.3339 2.34331 89.3649 2.19193 89.4245 2.05098C89.4841 1.91004 89.571 1.78232 89.6803 1.67524C89.7896 1.56817 89.9191 1.48386 90.0613 1.42721C90.2034 1.37056 90.3554 1.3427 90.5084 1.34524C90.8168 1.34524 91.1127 1.46777 91.3308 1.68589C91.5489 1.90401 91.6714 2.19984 91.6714 2.50831C91.6714 2.81677 91.5489 3.11261 91.3308 3.33072C91.1127 3.54884 90.8168 3.67138 90.5084 3.67138C90.353 3.67533 90.1984 3.64764 90.0541 3.58998C89.9097 3.53233 89.7786 3.44592 89.6687 3.33601C89.5588 3.2261 89.4724 3.09498 89.4147 2.95063C89.3571 2.80628 89.3294 2.65171 89.3333 2.49632ZM90.5084 3.47954C90.766 3.47954 91.013 3.37721 91.1951 3.19507C91.3773 3.01293 91.4796 2.76589 91.4796 2.50831C91.4796 2.25072 91.3773 2.00369 91.1951 1.82155C91.013 1.63941 90.766 1.53709 90.5084 1.53709C90.2508 1.53709 90.0038 1.63941 89.8216 1.82155C89.6395 2.00369 89.5372 2.25072 89.5372 2.50831C89.5372 2.76589 89.6395 3.01293 89.8216 3.19507C90.0038 3.37721 90.2508 3.47954 90.5084 3.47954ZM90.2686 3.19176H90.0767V1.84884H90.5803C90.8921 1.84884 91.0599 1.96874 91.0599 2.23253C91.0636 2.27867 91.0576 2.32507 91.0424 2.36878C91.0271 2.41248 91.0029 2.45253 90.9713 2.48637C90.9398 2.52021 90.9015 2.5471 90.8589 2.56533C90.8164 2.58355 90.7705 2.59272 90.7242 2.59224L91.1079 3.19176H90.8681L90.5084 2.61623H90.2686V3.19176ZM90.5084 2.42437C90.6762 2.42437 90.8441 2.40039 90.8441 2.20855C90.8441 2.0167 90.7002 2.0167 90.5563 2.0167H90.2686V2.42437H90.5084ZM13.6499 0.553873C14.1055 2.32845 14.5132 4.12701 14.8489 5.94956C14.8717 6.10593 14.8575 6.26547 14.8075 6.41539C14.7576 6.5653 14.6732 6.70143 14.5611 6.81287C14.3875 7.0092 14.1493 7.13682 13.8897 7.17258C13.7099 7.17737 13.5312 7.14344 13.3657 7.0731C13.2002 7.00276 13.0518 6.89765 12.9304 6.7649C12.1631 5.61382 11.9232 4.24692 10.964 3.21575C10.8506 3.10918 10.7094 3.03688 10.5566 3.00717C10.4038 2.97747 10.2458 2.99158 10.1007 3.04788L9.88488 3.2637L10.0527 19.8344C10.1037 20.0929 10.2318 20.3298 10.4202 20.5139C10.6086 20.698 10.8484 20.8206 11.1079 20.8656C11.3109 20.794 11.4912 20.6696 11.6303 20.5052C11.7694 20.3409 11.8622 20.1425 11.8993 19.9304L11.9472 18.9951L11.8513 10.9136C11.7074 10.3141 10.9161 10.3141 10.8201 9.73852C10.9161 9.42677 11.2758 9.21095 11.5396 9.06706C12.5947 8.61143 13.6978 8.29968 14.729 7.7721C15.0408 7.74812 15.4244 7.70016 15.7122 7.86802L15.9041 8.13181L16.024 19.7145C16.1199 20.0982 16.2398 20.6498 16.7194 20.7217C16.9352 20.8896 16.8633 21.1774 16.7674 21.3932C16.5276 21.7529 16.0719 21.7769 15.7362 21.8249H11.8513C11.5396 21.8488 11.2997 21.633 11.0839 21.4412C10.2446 22.0886 8.82972 21.8249 7.87049 21.8968C6.74339 21.7769 5.32852 22.2086 4.34531 21.5371C4.17744 21.4172 4.22541 21.1534 4.22541 21.0095C4.41725 20.6258 4.96881 20.7697 5.08871 20.3141L5.25658 19.7865L5.20862 7.19656L5.13668 3.2637C5.07594 3.16937 4.98947 3.0944 4.88748 3.04766C4.78549 3.00091 4.67224 2.98435 4.56114 2.99992C4.12948 3.04788 3.86569 3.47953 3.64987 3.79128C3.14627 4.67857 2.81054 5.66179 2.37888 6.57306C2.23364 6.87516 1.97514 7.10781 1.65946 7.22054C1.44967 7.2786 1.22766 7.2756 1.01952 7.21188C0.811378 7.14816 0.625737 7.02637 0.484397 6.86083C-0.0431806 6.21334 0.436436 5.35004 0.484397 4.65459L1.34771 0.649795C1.46761 0.457948 1.56353 0.170183 1.80334 0.122221C2.49879 -0.141568 2.66665 0.841642 3.31413 0.649795L11.9472 0.577855C12.4748 0.529894 12.7866 -0.261472 13.3861 0.122221L13.6499 0.553873ZM66.5036 0.769699L66.6954 1.03349L66.7434 3.7673L66.8633 19.6666C66.9352 20.1222 67.1031 20.5539 67.5827 20.7697C67.646 20.8682 67.6873 20.9791 67.7038 21.095C67.7204 21.2108 67.7118 21.3289 67.6786 21.4412C67.4868 21.9687 66.8873 22.0407 66.3597 22.0407L62.7386 22.0167C62.5816 22.0026 62.4295 21.9545 62.2928 21.8759C62.1562 21.7972 62.0383 21.6898 61.9472 21.5611C61.89 21.4462 61.8582 21.3203 61.8541 21.192C61.8499 21.0637 61.8735 20.936 61.9232 20.8177C62.283 20.5779 62.6906 20.338 62.7386 19.8344L62.7146 12.4244C62.6666 11.8249 62.7386 10.9376 62.6667 10.362C62.3789 11.0335 62.7146 11.9687 61.9712 12.3524C61.8179 12.3953 61.6571 12.4047 61.4999 12.3799C61.3426 12.355 61.1926 12.2966 61.0599 12.2086C60.7542 11.8806 60.5465 11.4735 60.4604 11.0335C60.2446 10.8416 59.9808 10.9855 59.765 11.0815C56.9592 13.0719 58.1822 16.9568 57.9424 19.9783C57.8945 20.5779 58.7098 20.362 58.7818 20.9136C58.7708 21.1605 58.678 21.3967 58.518 21.5851C58.2542 21.8488 57.8225 21.8249 57.5108 21.8728L53.53 21.8249C53.4001 21.7946 53.2796 21.7328 53.1793 21.645C53.0789 21.5571 53.0017 21.446 52.9544 21.3213C52.9115 21.2241 52.8956 21.1171 52.9083 21.0116C52.9209 20.9062 52.9617 20.806 53.0264 20.7217C53.2662 20.4819 53.6978 20.5299 53.7938 20.1462L53.8177 19.2349L53.7458 10.8896C53.6978 10.1942 52.6427 10.2421 52.7386 9.47474L53.2422 9.0191C54.3933 8.5155 55.5923 8.15579 56.7194 7.62821C57.1511 7.58025 57.5827 7.58025 57.8225 7.96394C57.9424 8.56347 57.7746 9.30687 57.9424 9.95436C57.9904 10.0263 58.0863 10.0023 58.1343 9.97833C58.8297 8.89919 59.741 7.6522 61.1559 7.74812C61.6834 7.79608 62.3069 7.82006 62.5947 8.32366L62.6667 8.1558L62.6187 5.03829L62.5707 5.01431C62.5938 4.67686 62.5695 4.33785 62.4988 4.00711C62.5467 3.31167 61.4436 3.28768 61.7794 2.54428C62.7866 1.36922 64.4412 1.48913 65.6163 0.577855C65.9255 0.532425 66.2407 0.600577 66.5036 0.769699Z" />
            <path className="fill-current text-gray-900 dark:text-white" d="M38.2542 0.697546L38.3742 1.03328L38.4221 8.15558C38.7099 8.68316 39.0216 7.86781 39.3574 7.81984C40.3885 7.46013 41.5876 7.86781 42.331 8.68316C43.7698 10.2179 43.9857 12.1844 44.3454 14.1748L44.3933 14.1268C44.6092 11.8246 45.0888 9.40258 47.1751 8.15558C48.2782 7.48412 49.8849 7.55606 50.9401 8.17956C52.2351 9.33064 53.2662 10.7455 53.2183 12.5201C53.2396 12.974 53.1828 13.4283 53.0504 13.863C51.5156 14.6064 49.861 15.134 48.3022 15.8055C47.9425 16.0932 48.2542 16.5489 48.3022 16.8606C48.566 17.5081 48.9017 18.4194 49.7171 18.5393C50.1727 18.6832 50.8202 18.9709 51.2279 18.5872C51.7075 18.1556 51.3478 16.8366 52.4029 17.1724C52.6175 17.2079 52.8215 17.291 52.9999 17.4154C53.1783 17.5399 53.3267 17.7026 53.4341 17.8918C53.7219 19.1388 53.1463 20.2899 52.5708 21.2251C51.4677 22.1604 49.9569 22.3282 48.542 22.1604C45.8082 21.6088 44.825 18.7071 44.4413 16.2851C44.2255 18.4913 44.0816 21.1532 41.6595 22.0405C40.1727 22.4481 38.518 22.1604 37.4629 21.1052C37.343 20.9134 37.295 20.6256 37.0312 20.5297C36.4317 20.5537 36.4317 21.2251 36.096 21.6088C35.7123 21.8486 35.3046 22.2323 34.801 22.0645C34.6293 21.9488 34.4892 21.7922 34.3933 21.6088C33.8658 22.1844 33.1224 21.9925 32.4029 22.0405L29.5972 21.9925C29.4318 21.9738 29.2755 21.9071 29.1476 21.8006C29.0198 21.694 28.9259 21.5523 28.8778 21.393C28.8298 21.0573 29.1655 20.9134 29.4053 20.7935C29.6912 20.3534 29.8181 19.8288 29.765 19.3067C29.6925 16.872 29.4602 14.4447 29.0696 12.0405C28.9257 11.5609 28.7818 11.0093 28.3742 10.6975C28.0624 10.5776 27.8466 10.8174 27.6308 10.9853L27.3909 11.369L27.4149 19.9541C27.5348 20.3618 27.7027 20.8175 28.1583 20.9613C28.2128 21.0369 28.246 21.1258 28.2545 21.2186C28.2629 21.3114 28.2463 21.4047 28.2063 21.4889C27.6787 22.2563 26.6236 21.8726 25.8802 21.9685C24.9689 21.8486 23.53 22.3282 22.9065 21.4649C22.8629 21.3559 22.8607 21.2346 22.9005 21.1241C22.9403 21.0136 23.0192 20.9216 23.1224 20.8654C23.578 20.7455 23.6739 20.2419 23.8178 19.9062L23.7459 10.9374C23.663 10.7848 23.5422 10.6561 23.3952 10.5637C23.2482 10.4714 23.0799 10.4183 22.9065 10.4098C22.5228 10.4338 22.2111 10.7695 22.0192 11.0812C21.6116 11.8246 21.8514 12.664 21.8034 13.5273L21.8754 19.9781C21.8514 20.5297 22.4029 20.6975 22.6427 21.0333C22.6642 21.1878 22.6364 21.3452 22.5632 21.483C22.49 21.6208 22.3752 21.732 22.2351 21.8007C20.7003 22.0884 19.3814 21.8726 17.8226 21.9206C17.4629 21.8486 17.0552 21.8246 16.8634 21.4649C16.7914 21.321 16.7435 21.0573 16.9113 20.9374C17.0891 20.867 17.2485 20.7569 17.3773 20.6156C17.5061 20.4743 17.601 20.3055 17.6547 20.122L17.7507 19.6424L17.6547 11.0333C17.5588 10.3378 16.5037 10.4338 16.6955 9.69035C17.1991 9.09083 18.0144 8.97092 18.6859 8.65917C19.3132 8.45312 19.9227 8.19649 20.5085 7.89179C20.9641 7.86781 21.5156 7.79587 21.7075 8.2515C21.7075 8.58723 21.5876 9.04287 21.9233 9.21074C22.4509 9.16277 22.5228 8.53927 22.9545 8.27549C23.7938 7.58004 25.2087 7.72393 26.12 8.15558C26.5756 8.41937 26.7195 8.85102 27.0552 9.21074C27.6547 9.21074 27.7267 8.46733 28.1583 8.20354C28.9737 7.67596 30.2926 7.84383 31.06 8.32344C32.4749 9.47452 32.4749 11.321 32.8825 12.9278C33.268 15.1294 33.4685 17.3594 33.4821 19.5944C33.554 20.0501 33.53 20.7695 34.1056 20.9134L34.2255 21.0333L34.3214 20.8414L34.1535 4.34263C34.1295 3.71912 33.7219 3.21553 33.3142 2.80786C33.2849 2.71339 33.2805 2.61294 33.3016 2.51629C33.3226 2.41964 33.3682 2.33008 33.4341 2.2563C34.3454 1.39299 35.5924 1.32104 36.6475 0.745504C37.1272 0.33783 37.9185 0.265892 38.2542 0.697546ZM47.4869 10.194C47.1991 11.5129 47.295 12.664 47.5348 13.9589C47.6307 14.1268 47.6787 14.4146 47.9425 14.4146C48.4461 14.1268 49.0456 14.0069 49.4533 13.5033C50.2926 12.1844 49.3094 10.7695 48.6859 9.61841C48.2063 9.28267 47.6547 9.71433 47.4869 10.194ZM39.7171 9.73831C39.4639 9.8326 39.2574 10.0219 39.1415 10.2659C38.2782 12.1124 38.2063 14.1268 38.4221 16.2371C38.614 17.1244 38.6859 18.0836 39.3574 18.7551C39.5492 18.875 39.813 18.7071 40.0049 18.5633C41.5396 16.2131 41.084 12.688 40.2207 10.146C40.1008 10.0501 40.0288 9.69035 39.7171 9.73831ZM98.8058 0.793468L98.8538 1.6328L99.0216 18.9469C99.0271 19.0474 99.0617 19.144 99.1214 19.225C99.181 19.3059 99.2631 19.3677 99.3574 19.4026C99.5492 19.4745 99.861 19.4985 99.8849 19.7623C99.9092 19.9041 99.9047 20.0494 99.8717 20.1894C99.8388 20.3295 99.778 20.4615 99.6931 20.5776C98.6859 21.1292 97.6307 21.4649 96.5756 21.8486C96.072 21.9206 95.5684 22.3043 95.0648 21.9685C94.777 21.7527 95.2566 21.321 94.825 21.2011C94.3694 21.4889 94.0576 22.0405 93.554 22.1844C92.4029 22.4002 91.2518 21.9206 90.4125 21.1532C88.59 19.0668 88.7099 15.7815 89.1175 13.0716C89.2926 11.2514 90.0494 9.53595 91.2758 8.17956C91.5762 7.90661 91.9377 7.70971 92.3299 7.60539C92.7222 7.50108 93.1337 7.49238 93.53 7.58004C93.9617 7.65198 94.2255 8.0117 94.6092 8.2515C94.7051 8.22752 94.801 8.17956 94.801 8.08363L94.777 4.03088C94.6571 3.26349 92.9785 3.09562 93.8418 2.08843C94.1775 1.89658 94.6571 2.04047 95.0168 1.8726C96.072 1.27308 97.247 0.913375 98.3262 0.361816C98.4407 0.376005 98.5481 0.425008 98.6339 0.502205C98.7197 0.579401 98.7797 0.681068 98.8058 0.793468ZM93.506 9.78627C93.1703 9.8822 93.0984 10.2419 92.9785 10.4817C92.5228 12.1364 92.1631 14.0069 92.4269 15.8294C92.6667 16.8606 92.7147 17.9877 93.602 18.7791C93.7014 18.8429 93.8216 18.8661 93.9377 18.8438C94.0537 18.8215 94.1568 18.7554 94.2255 18.6592C95.3286 16.5968 95.1847 13.911 94.6571 11.6088C94.3933 10.9374 94.2734 10.0501 93.506 9.78627Z" />
            <path className="fill-current text-gray-900 dark:text-white" d="M86.9832 9.30704C87.414 10.0042 87.7071 10.7776 87.8465 11.5852C88.3319 14.2253 88.6602 16.8918 88.8297 19.5708C88.837 19.9032 88.9366 20.2271 89.1175 20.5061C89.3333 20.6979 89.669 20.7219 89.669 21.0576C89.6643 21.2012 89.6189 21.3404 89.5383 21.4592C89.4577 21.5781 89.345 21.6716 89.2134 21.7291C87.8705 21.9689 86.3357 21.849 84.9448 21.849C84.7865 21.8309 84.6353 21.773 84.5053 21.6808C84.3753 21.5885 84.2708 21.4649 84.2014 21.3214C84.1534 21.1056 84.1774 20.7938 84.4412 20.6979C84.9928 20.4821 84.9688 19.8586 85.0647 19.355C85.1127 16.6931 84.5132 14.0073 83.7697 11.5133C83.6561 11.1873 83.4366 10.9087 83.1462 10.7219C83.034 10.6863 82.9129 10.6907 82.8035 10.7344C82.6942 10.7781 82.6034 10.8585 82.5467 10.9617L82.4748 11.2974L82.5947 19.9305C82.5707 20.5301 83.1942 20.626 83.3861 21.0816C83.434 21.3934 83.1462 21.6332 82.9304 21.7771C81.6115 22.0169 79.9568 21.897 78.6139 21.873C78.4543 21.8478 78.3041 21.7814 78.1779 21.6805C78.0518 21.5796 77.9541 21.4476 77.8944 21.2974C77.7745 21.3934 77.5587 21.6332 77.3908 21.7771C76.8873 22.1847 76.2637 22.2087 75.6642 22.1847C74.9688 22.0409 74.4892 21.5612 73.9376 21.0816H73.6019C72.5707 22.0888 71.0359 22.6644 69.669 22.0408C68.5179 21.6811 67.4628 20.602 67.3189 19.379C67.0311 17.7483 67.1271 15.9018 68.494 14.8466C69.5731 13.6715 70.964 13.2399 72.3309 12.7603C72.6187 12.1608 72.5707 11.3454 72.3789 10.7219C72.187 10.3382 72.0671 9.90656 71.6115 9.71471L70.3405 9.59481C70.2206 9.61879 70.0527 9.66675 70.0287 9.81063C70.1486 10.1464 70.6043 10.1703 70.7002 10.578C70.8201 11.1296 70.8201 11.873 70.3645 12.3046C69.717 12.7123 68.6858 12.9042 68.0143 12.4006C67.4388 11.9449 67.2949 11.2974 67.2949 10.578C67.2709 9.45092 68.2781 8.63557 69.2134 8.25188C70.5563 7.79625 71.9712 7.86819 73.41 8.03606C73.8831 8.0972 74.3331 8.27642 74.7187 8.55721C75.1042 8.838 75.4129 9.21132 75.6163 9.64277C76.1199 10.9857 76.2638 12.4725 76.4316 13.9353C76.5515 15.614 76.6235 17.3886 76.7194 19.0672C76.7296 19.16 76.7637 19.2485 76.8183 19.3242C76.8729 19.3998 76.9463 19.46 77.0311 19.4989C77.3189 19.4509 77.7266 19.4989 77.7506 19.8586C77.8715 20.1559 77.9366 20.4729 77.9424 20.7938C78.0956 20.7686 78.2399 20.7047 78.3616 20.6082C78.4833 20.5117 78.5784 20.3858 78.6379 20.2423L78.8057 19.6907L78.7098 10.9617C78.6618 10.2423 76.8393 9.93054 78.1103 9.21111C79.1414 8.70752 80.2446 8.32382 81.2518 7.77227C81.5875 7.7243 81.9952 7.7243 82.259 7.96411C82.4508 8.2279 82.3069 8.58761 82.5467 8.82742C82.8825 8.70752 82.8825 8.32382 83.1462 8.108C83.3673 7.88451 83.6429 7.72267 83.9458 7.63854C84.2486 7.55441 84.5682 7.55091 84.8729 7.62838C85.7562 7.91418 86.506 8.51059 86.9832 9.30704ZM71.8273 14.7027C70.4844 15.4701 70.8681 17.1488 70.8201 18.3958C70.94 18.8994 71.1079 19.5468 71.6834 19.7387C71.8997 19.8102 72.1326 19.8141 72.3511 19.7498C72.5696 19.6856 72.7633 19.5562 72.9064 19.379C72.9161 17.7936 72.8441 16.2088 72.6906 14.6308C72.5467 14.2711 72.0671 14.4869 71.8273 14.7027Z" />
            </g>
            </svg>

          </div>
          <div className="w-1/3">

            <svg className="mx-auto w-20 my-20" width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-gray-900 dark:text-white" d="M65.12 24C73.84 20.16 79.6 14.4 79.84 7.99998C79.84 7.99998 77.52 6.23998 70.08 3.43998C63.52 1.03998 58.56 0.47998 58.56 0.47998V14.72C58.56 16.88 57.68 19.04 56.08 20.96C51.12 19.76 45.68 19.12 40 19.12C34.24 19.12 28.8 19.76 23.84 20.96C22.24 19.04 21.36 16.88 21.36 14.72V0.47998C21.36 0.47998 16.4 1.03998 9.84003 3.43998C2.40003 6.23998 0.160034 7.99998 0.160034 7.99998C0.480034 14.4 6.16003 20.16 14.96 24C6.16003 27.84 0.480034 33.6 0.160034 40C0.160034 40 2.48003 41.76 9.92003 44.56C16.48 46.96 21.44 47.52 21.44 47.52V33.28C21.44 31.12 22.32 28.96 23.92 27.04C28.88 28.24 34.32 28.88 40 28.88C45.76 28.88 51.2 28.24 56.16 27.04C57.76 28.96 58.64 31.12 58.64 33.28V47.52C58.64 47.52 63.6 46.96 70.16 44.56C77.6 41.84 79.84 40 79.84 40C79.52 33.6 73.84 27.84 65.12 24ZM40 27.2H39.84C34.64 27.2 30.48 25.92 27.36 24C30.48 22.08 34.64 20.8 39.84 20.8H40.16C45.36 20.8 49.52 22.08 52.64 24C49.52 25.92 45.36 27.2 40.16 27.2H40Z" />
            </svg>


            <svg className="mx-auto w-20 my-20" width="100" height="47" viewBox="0 0 100 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-gray-900 dark:text-white" d="M35.25 14H32.35V2.55H28.15V0.05H39.45V2.55H35.25V14ZM43.4 7.75V14H40.5V0.05H43.4V5.35H48.85V0.05H51.75V14H48.85V7.75H43.4ZM63 2.5H55.7V5.45H62.15V7.9H55.7V11.55H63V14H53V0.05H63V2.5ZM8.65 16.15H11.35V30.05H8.45L2.75 20.15H2.7V30.05H0V16.15H3.05L8.6 25.8H8.65V16.15ZM19.35 15.75C21.2 15.75 26.05 16.55 26.05 23.05C26.05 29.55 21.2 30.35 19.35 30.35C17.5 30.35 12.65 29.55 12.65 23.05C12.65 16.55 17.5 15.75 19.35 15.75ZM19.35 27.95C20.9 27.95 23.1 27 23.1 23.1C23.1 19.2 20.9 18.25 19.35 18.25C17.8 18.25 15.55 19.2 15.55 23.1C15.55 27 17.8 27.95 19.35 27.95ZM46.55 30.05H43.65V18.6H39.4V16.15H50.75V18.6H46.55V30.05ZM54.7 23.8V30.05H51.8V16.15H54.7V21.4H60.1V16.15H63V30.05H60.1V23.8H54.7ZM27.25 16.15H34.3C38 16.15 38.7 18.9 38.7 20.1C38.7 21.65 37.9 22.95 36.55 23.4C37.7 23.9 38.3 24.35 38.3 26.95C38.3 29 38.3 29.5 38.9 29.7V30.05H35.7C35.5 29.4 35.4 28.7 35.4 27.25C35.4 25.35 35.3 24.6 33.15 24.6H30.15V30.05H27.3L27.25 16.15ZM33.5 22.25C35 22.25 35.75 21.7 35.75 20.35C35.75 19.6 35.4 18.55 33.7 18.55H30.1V22.25H33.5ZM20.5 46.55H17.55V32.25H27.7V34.8H20.5V38H26.8V40.55H20.5V46.55ZM29.05 46.55H25.9L31 32.25H34.45L39.5 46.55H36.25L35.35 43.6H30L29.05 46.55ZM30.8 41.15H34.45L32.7 35.5H32.65L30.8 41.15ZM48.6 37C48.35 36.15 47.9 34.55 45.45 34.55C44 34.55 41.9 35.5 41.9 39.55C41.9 42.1 42.9 44.4 45.45 44.4C47.1 44.4 48.25 43.45 48.6 41.7H51.6C51 44.8 49 46.95 45.4 46.95C41.6 46.95 38.9 44.4 38.9 39.45C38.9 34.45 41.8 31.9 45.45 31.9C49.7 31.9 51.45 34.85 51.6 36.95H48.6V37ZM63.05 34.8H55.55V37.8H62.2V40.3H55.55V44H63.05V46.55H52.8V32.25H63.05V34.8ZM12.15 39.3C14.25 39.3 16 40.95 16 43.15C16 45.35 14.25 47 12.15 47C10.05 47 8.25 45.35 8.25 43.15C8.25 40.95 10.05 39.3 12.15 39.3ZM12.15 46.45C13.95 46.45 15.3 45.05 15.3 43.15C15.3 41.3 13.9 39.9 12.15 39.9C10.35 39.9 8.95 41.3 8.95 43.15C8.95 45 10.35 46.45 12.15 46.45ZM10.65 40.9H12.4C13.45 40.9 14 41.3 14 42.2C14 43 13.5 43.35 12.8 43.45L14.1 45.45H13.35L12.1 43.5H11.35V45.45H10.65V40.9ZM11.35 42.9H12.1C12.7 42.9 13.3 42.85 13.3 42.15C13.3 41.55 12.8 41.45 12.3 41.45H11.35V42.9ZM72.55 45.65V38.3C72.55 35 69.85 32.3 66.55 32.3H65.9V46.6H72.55V45.65ZM100 45.65V33.45C100 15 85 0 66.55 0H66.2H66.25H65.9V14H66.85C77.7 14.15 86.55 23 86.7 33.85V46.5H100V45.65Z" />
            <path className="fill-current text-gray-900 dark:text-white" d="M84.55 46.1499V34.0499C84.5 24.3999 76.8 16.5499 67.25 16.1499H66.15H66.2H65.85V30.0999H66.5C71 30.0999 74.6 33.7499 74.6 38.1999V46.4999H84.55V46.1499Z" />
            </svg>

          </div>
          <div className="w-1/3">
            <svg className="mx-auto w-20 my-20" width="100" height="31" viewBox="0 0 100 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-gray-900 dark:text-white" d="M94.5836 11.048C93.9291 11.048 93.2964 11.3708 93.2964 12.0361C93.2964 12.7282 93.9073 12.9565 95.7073 13.5326C97.6964 14.1783 99.9873 15.0737 99.9873 17.6975C99.9873 20.2981 97.72 22.369 94.5146 22.369C91.5437 22.369 89.4618 20.5514 88.5018 18.7338L91.5909 17.1214C92.2927 18.3432 93.3455 19.0335 94.5382 19.0335C95.2636 19.0335 96.1746 18.757 96.1746 17.9062C96.1746 16.8699 94.8418 16.7076 92.9 15.9941C91.7782 15.5803 89.5073 14.6367 89.5073 12.0593C89.5073 9.52828 91.7073 7.73389 94.4673 7.73389C96.5491 7.73389 98.2346 8.77021 99.2873 10.1276L96.9927 12.1984C96.3164 11.4618 95.3327 11.048 94.5836 11.048ZM84.2382 22.1389H80.4018V11.2549H78.1327V7.89442H80.4018V6.58342C80.4018 3.8205 82.74 1.56592 85.6182 1.56592H87.5837V5.13328H85.9927C84.8927 5.13328 84.2382 5.82357 84.2382 6.81351V7.89442H87.84V11.2549H84.2382V22.1389ZM69.5018 22.369C68.5231 22.3695 67.554 22.1804 66.6499 21.8127C65.7458 21.4449 64.9247 20.9057 64.2335 20.226C63.5423 19.5462 62.9946 18.7393 62.622 17.8515C62.2493 16.9637 62.059 16.0125 62.0618 15.0523C62.0618 13.117 62.8455 11.261 64.2404 9.89255C65.6354 8.52409 67.5273 7.75529 69.5 7.75529C71.4727 7.75529 73.3647 8.52409 74.7596 9.89255C76.1545 11.261 76.9382 13.117 76.9382 15.0523C76.9411 16.0122 76.7508 16.9631 76.3784 17.8507C76.006 18.7383 75.4587 19.545 74.7679 20.2247C74.077 20.9044 73.2563 21.4437 72.3527 21.8116C71.449 22.1796 70.4802 22.369 69.5018 22.369ZM69.5018 11.4618C67.5127 11.4618 65.8982 13.0956 65.8982 15.0737C65.8982 17.0536 67.5127 18.6411 69.5018 18.6411C71.4891 18.6411 73.1018 17.0536 73.1018 15.0737C73.1018 13.0956 71.4891 11.4618 69.5018 11.4618ZM73.0327 6.19279C72.7496 6.19303 72.4692 6.13837 72.2077 6.03197C71.9461 5.92556 71.7086 5.76951 71.5087 5.57276C71.3088 5.37602 71.1506 5.14246 71.043 4.88553C70.9354 4.62859 70.8806 4.35333 70.8818 4.07556C70.8818 3.51569 71.1085 2.97875 71.5121 2.58287C71.9156 2.18698 72.463 1.96458 73.0337 1.96458C73.6043 1.96458 74.1517 2.18698 74.5552 2.58287C74.9588 2.97875 75.1855 3.51569 75.1855 4.07556C75.1855 5.24922 74.2255 6.19279 73.0327 6.19279ZM68.1218 4.07556C68.1218 5.24922 67.1618 6.19279 65.9691 6.19279C65.6859 6.19303 65.4054 6.13838 65.1437 6.032C64.8821 5.92562 64.6445 5.76959 64.4444 5.57287C64.2444 5.37615 64.086 5.14261 63.9782 4.88566C63.8704 4.62871 63.8154 4.35341 63.8164 4.07556C63.8164 3.51546 64.0432 2.97829 64.4469 2.58223C64.8506 2.18618 65.3982 1.96368 65.9691 1.96368C66.54 1.96368 67.0876 2.18618 67.4913 2.58223C67.895 2.97829 68.1218 3.51546 68.1218 4.07556ZM49 9.39093V7.89442H52.7437V20.6656C52.7437 25.3834 49.4 28.5602 44.9782 28.5602C42.7091 28.5602 40.9309 27.7325 39.6218 26.5571L42.0782 23.9797C42.7327 24.4648 43.7382 25.016 44.9782 25.016C46.9891 25.016 49 23.5444 49 21.2881V20.621C47.9255 21.6805 46.5673 22.278 44.8837 22.278C41.1182 22.278 37.8891 19.0567 37.8891 15.0274C37.8891 11.0016 41.14 7.73389 44.8837 7.73389C46.5673 7.73389 47.9255 8.35461 49 9.39093ZM41.7255 15.0523C41.7255 17.009 43.3164 18.5501 45.3764 18.5501C47.34 18.5501 49.0255 17.1464 49.0255 15.0523C49.0313 14.5801 48.941 14.1115 48.7598 13.674C48.5786 13.2365 48.3102 12.8389 47.9703 12.5045C47.6305 12.1701 47.226 11.9056 46.7805 11.7265C46.3351 11.5475 45.8577 11.4575 45.3764 11.4618C44.896 11.4611 44.4202 11.5535 43.9763 11.7338C43.5324 11.9141 43.1292 12.1787 42.79 12.5124C42.4507 12.8461 42.182 13.2422 41.9993 13.6781C41.8166 14.114 41.7236 14.581 41.7255 15.0523ZM31.6909 7.89442H35.4346V22.1389H31.6909V20.7137C30.5927 21.7715 29.2818 22.369 27.5982 22.369C23.6909 22.369 20.58 19.1013 20.58 15.0523C20.58 11.0016 23.6909 7.73389 27.5746 7.73389C29.2818 7.73389 30.5927 8.35461 31.6909 9.39093V7.89442ZM28.0655 11.4618C27.5835 11.4618 27.1063 11.5554 26.6614 11.7373C26.2166 11.9192 25.8128 12.1858 25.4735 12.5216C25.1343 12.8575 24.8662 13.2559 24.6847 13.6939C24.5033 14.132 24.4121 14.6009 24.4164 15.0737C24.4164 17.0536 26.0073 18.6411 28.0655 18.6411C30.0309 18.6411 31.7146 17.1696 31.7146 15.0737C31.7231 14.5998 31.6348 14.129 31.4548 13.6891C31.2748 13.2492 31.0069 12.8492 30.6668 12.5125C30.3267 12.1759 29.9213 11.9094 29.4745 11.729C29.0277 11.5485 28.5486 11.4577 28.0655 11.4618ZM14.1709 13.67H5.74911V22.1389H1.79639V1.56592H5.74911V9.8975H14.1709V1.56592H18.1237V22.1389H14.1709V13.67ZM59.6073 22.1389H55.7709V1.56592H59.6073V22.1389Z" />
            </svg>

            <svg className="mx-auto w-20 my-20" width="83" height="41" viewBox="0 0 83 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-gray-900 dark:text-white" d="M76.0729 29.5181C75.9276 29.069 75.5967 28.919 75.1734 29.1195C74.9626 29.2309 74.754 29.3331 74.5456 29.4296L75.8248 33.0643C75.9315 33.414 75.6892 33.7622 75.2643 33.9622C72.1499 35.7585 68.1226 36.8567 64.4287 36.8567C60.0832 36.8567 56.5007 35.5728 53.914 33.2748C53.9029 33.2645 53.8921 33.2545 53.8811 33.2448C54.6008 34.5516 55.5135 35.6991 56.6037 36.6664C59.191 38.9647 62.7735 40.2486 67.119 40.2486C70.8123 40.2486 74.8402 39.1502 77.9546 37.3536C78.3795 37.1536 78.621 36.8054 78.5151 36.4557L76.0729 29.5181Z"/>
            <path className="fill-current text-gray-900 dark:text-white" d="M81.6561 7.20984C80.7819 6.6228 79.7915 6.11038 78.7257 5.68652L75.1595 11.6539C74.9046 12.103 74.537 12.2531 74.1617 12.0531C72.4437 11.0054 70.691 10.6554 68.5446 10.6554C64.0522 10.6554 60.654 13.9501 60.0472 18.8897C59.622 22.351 60.767 25.0022 63.0342 26.2809C62.6647 25.1302 62.5528 23.7821 62.7367 22.2817C63.3437 17.3417 66.7422 14.0473 71.2347 14.0473C73.3802 14.0473 75.1338 14.3971 76.8518 15.4447C77.227 15.6447 77.5944 15.4952 77.8495 15.0456L81.9951 8.1088C82.1885 7.75826 82.0316 7.41008 81.6561 7.20984Z"/>
            <path className="fill-current text-gray-900 dark:text-white" d="M49.2933 22.3355C49.2629 21.2337 49.3204 20.0838 49.4663 18.8897C49.4715 18.8477 49.4773 18.8059 49.4833 18.7639C45.3499 15.681 39.5018 15.0059 39.7464 13.0101C39.8941 11.81 41.0797 11.045 42.7712 11.045C44.6622 11.2098 47.6323 12.3558 50.119 13.8838C50.2604 13.9787 50.4009 14.0213 50.5342 14.0118C51.3688 10.865 52.9972 8.24227 55.2035 6.34003L55.5382 5.75167C55.7353 5.47891 55.6255 5.04165 55.2219 4.76888C52.0717 2.42229 47.354 0.839844 43.4786 0.839844C39.4353 0.839844 35.9096 1.99501 33.2553 4.02601L33.4321 2.58652C33.4931 2.09487 33.1649 1.65839 32.6188 1.65839H23.2311C22.74 1.65839 22.2499 2.09487 22.1897 2.58652L19.2677 26.3823C18.9665 28.8379 17.3662 30.3118 14.9647 30.3118C12.5637 30.3118 11.3252 28.8379 11.6337 26.3271L14.549 2.58652C14.6092 2.09487 14.2802 1.65839 13.7344 1.65839H4.3472C3.85554 1.65839 3.36546 2.09487 3.30476 2.58652L0.510394 25.3454C-0.566728 35.0058 3.99534 40.0814 13.7649 40.0814C18.8966 40.0814 22.9292 38.7115 25.7874 36.0409C25.8437 36.2062 25.969 36.3765 26.1608 36.5339C28.6217 38.7168 33.2503 40.136 37.8347 40.136C44.7436 40.136 50.1742 36.8537 52.3839 31.6531C50.4756 29.2371 49.3911 26.068 49.2933 22.3355ZM41.676 27.9647C41.5225 29.2205 40.2751 30.0394 38.5295 30.0394C36.4748 29.8751 33.6003 28.8382 31.2642 27.4189C30.8611 27.1462 30.4593 27.3104 30.2286 27.8562L30.1845 27.9337C30.3747 27.1112 30.5263 26.2485 30.6372 25.3454L31.1144 21.4594C35.2025 25.1756 41.9398 25.8176 41.676 27.9647Z"/>
            </svg>
          </div>
        </div>

        <div className="about-grid about-grid-2 grid grid-cols-9 grid-rows-9 auto-rows-max gap-2">
          {this.props.widgetsFor('imageRow2').map(function(item, index) {
            return (
              <div className="bg-red-200 bg-cover bg-center" style={{backgroundImage: `url(${getAsset(item.getIn(['data', 'image']))})`}} key={index}></div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto flex flex-wrap py-20">
          <div className="w-full lg:w-1/5 mb-10 font-semibold">
            Our Values
          </div>
          <div className="w-full lg:w-4/5">
            {this.props.widgetsFor('values').map(function(value, index) {
              return (
                <p className="normal-case">
                  <strong className="uppercase">{value.getIn(['data', 'title'])}</strong><br/>
                  {value.getIn(['data', 'description'])}
                </p>
              );
            })}
          </div>
        </div>

        <div className="about-grid about-grid-3 grid grid-cols-3 grid-rows-9 auto-rows-max gap-2 pb-20">
          {this.props.widgetsFor('imageRow3').map(function(item, index) {
            return (
              <div className="bg-red-200 bg-cover bg-center" style={{backgroundImage: `url(${getAsset(item.getIn(['data', 'image']))})`}} key={index}></div>
            );
          })}
        </div>

      </div>
    );
  }
}
