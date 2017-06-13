/* eslint no-undef: 0 */

import { defaults } from './utils';

/**
 * Noty
 *
 * @function Noty
 *
 * @description Notification factory
 *
 * @param { Object } opts
 * @return
 */

const Noty = (props) => {
  // initializations
  let interval;
  const defaultOptions = {
    type: 'primary',
    icon: '',
    html: null,
    title: '',
    message: '',
    closeBtn: true,
    container: 'floating',
    floating: {
      position: 'top-right',
      animationIn: 'jellyIn',
      animationOut: 'fadeOut',
    },
    focus: 0,
    timer: 500,
    onShow() {},
    onShown() {},
    onHide() {},
    onHidden() {},
  };

  const opts = defaults(props, defaultOptions);

  const alertClass = `alert alert-${opts.type}`;

  const alert = (function alert() {
    const div = document.createElement('div');
    div.classList.add('alert-wrap');
    return div;
  }());


  /**
   *
   * Component
   *
   */
  const Icon = opts.icon ? `
    <div class="media-left"> <span class="icon-wrap icon-wrap-xs icon-circle alert-icon">
        <i class="${opts.icon}"></i>
      </span>
    </div>
  ` : '';

  const CloseButton = props.closeBtn ? `
    <button class="close" type="button">
      <i class="fa fa-times-circle"></i>
    </button>
  ` : '';

  const HtmlContent = props.html ? `
    <div class="media">
        ${props.html}
    </div>
  ` : '';

  const MessageContent = `
    <div class="media">
      ${props.icon ? Icon : ''}
      <div class="media-body">
        <h4 class="alert-title">${props.title}</h4>
        <p class="alert-message">${props.message}</p>
      </div>
    </div>
  `;

  const Alert = `
    <div class="${alertClass}" role="alert">
      ${CloseButton}
      ${props.html ? HtmlContent : MessageContent}
    </div>
  `;

  /**
   * handlers
   *
   */
  const hide = () => {
    opts.onHide();

    if (opts.container === 'floating') {
      alert.classList.remove(opts.floating.animationIn);
      alert.classList.add(opts.floating.animationOut);
      alert.classList.remove('in');
    }

    const handler = () => {
      opts.onHidden();
      alert.parentNode.removeChild(alert);
    };

    alert.addEventListener('transitionend', handler);
    alert.addEventListener('webkitTransitionEnd', handler);
    alert.addEventListener('oTransitionEnd', handler);
    alert.addEventListener('MSTransitionEnd', handler);

    clearInterval(interval);
  };

  const show = () => {
    opts.onShow();

    if (opts.container === 'floating') {
      const floatingPosition = `floating=${props.floating.position}`;

      let div = document.querySelector('.floating-container');

      if (!div) {
        div = document.createElement('div');
        const container = document.querySelector('#container');
        div.id = floatingPosition;
        div.classList.add('floating-container');
        container.appendChild(div);
      }

      // inject alert into floating container
      alert.innerHTML = Alert;

      // push alert panel into wrapper
      div.appendChild(alert);

      // animate alert into view
      alert.classList.add('in', 'animated', opts.floating.animationIn);
      alert.focus = false;

      // set timeout to hide alert
      interval = setInterval(hide, opts.timer);

      // delay hack to call onShown()
      const setShown = setInterval(() => {
        opts.onShown();
        clearInterval(setShown);
      }, 200);


      const handler = (e) => {
        if (e.type === 'animationend') {
          opts.onShown();
        }
      };

      alert.addEventListener('transitionend', handler);
      alert.addEventListener('webkitTransitionEnd', handler);
      alert.addEventListener('oTransitionEnd', handler);
      alert.addEventListener('MSTransitionEnd', handler);
      alert.addEventListener('animationend', handler);
      alert.addEventListener('webkitAnimationEnd', handler);
      alert.addEventListener('oAnimationEnd', handler);
      alert.addEventListener('MSAnimationEnd', handler);
    }
  };

  show();
};

export default Noty;
