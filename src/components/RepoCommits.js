/**
 * Created by santong on 2017/8/9.
 */
import React, {
    Component,
    PropTypes
} from 'react';


const r_radio = 12;
export default class RepoCommits extends Component {

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        sliderWidth: 500,
        sliderHeight: 120,
        during: 140,
        fontSize: 12,
        commits: [{
            des: 'init repo'
        }, {
            des: 'add feature a'
        }, {
            des: 'add feature b'
        }, {
            des: 'fix bugs #12'
        }, {
            des: 'add feature c'
        }, {
            des: 'add feature d'
        }],
        lineColor: ['#0033cc', '#00ccff'],
        pointColor: "#0099ff",
        textColor: "#222",
    };

    static propTypes = {
        sliderWidth: PropTypes.number,
        sliderHeight: PropTypes.number,
        during: PropTypes.number,
        fontSize: PropTypes.number,
        commits: PropTypes.array,
        lineColor: PropTypes.array || PropTypes.string,
        pointColor: PropTypes.string,
        textColor: PropTypes.string
    };

    componentDidMount() {
        this.ctxConfig();
        this.treeLine();
        this.treeLeaves();
    }

    ctxConfig() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.font = `${this.props.fontSize}px Verdana`;
        ctx.strokeStyle = "transparent";
    }

    treeLine() {
        const ctx = this.refs.canvas.getContext('2d');
        let r = this.props.sliderHeight / r_radio;
        let dur = RepoCommits.calculateDuring(this.props.during, r);
        let s = RepoCommits.calculateDistance(this.props.commits.length, r, dur);

        ctx.beginPath();

        let lineColor = this.props.lineColor;
        if (typeof lineColor === 'string') {
            ctx.fillStyle = lineColor;
        } else {
            let gradient = ctx.createLinearGradient(0, 0, s, 0);
            gradient.addColorStop(0, lineColor[0]);
            let gdur = 1 / (lineColor.length - 1);
            for (let i = 1; i < lineColor.length - 1; i++) {
                gradient.addColorStop(i * gdur, lineColor[i]);
            }
            gradient.addColorStop(1.0, lineColor[lineColor.length - 1]);
            ctx.fillStyle = gradient;
        }

        ctx.fillRect(0, this.props.sliderHeight / 2, s, 2);
        ctx.stroke();
    }

    treeLeaves() {
        let r = this.props.sliderHeight / r_radio;
        let hintDur = RepoCommits.calculatePos(r * 4);
        let dur = RepoCommits.calculateDuring(this.props.during, r);
        for (let i = 0; i < this.props.commits.length; i++) {
            this.treeArc({
                pos: dur * i + r,
                sliderHeight: this.props.sliderHeight,
                hintDur: i % 2 === 0 ? hintDur : -hintDur,
                commit: this.props.commits[i],
                color: this.props.pointColor,
                textColor: this.props.textColor
            });
        }
        this.treeArc({
            pos: dur * this.props.commits.length + r,
            sliderHeight: this.props.sliderHeight,
            color: this.props.pointColor,
            textColor: this.props.textColor,
        });
    }

    treeArc(params) {
        let {
            pos,
            sliderHeight,
            hintDur,
            commit,
            color,
            textColor
        } = params;
        let r = sliderHeight / r_radio;
        const ctx = this.refs.canvas.getContext('2d');

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(pos, sliderHeight / 2, r, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.arc(pos, sliderHeight / 2, r * 0.8, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();

        if (hintDur) {
            ctx.beginPath();
            hintDur > 0 ? ctx.moveTo(pos + r * 0.71, sliderHeight / 2 + r * 0.71) : ctx.moveTo(pos - r * 0.71, sliderHeight / 2 - r * 0.71); // 根号2 / 2 ≈ 0.71
            ctx.lineTo(pos + hintDur, sliderHeight / 2 + hintDur);
            ctx.fillStyle = textColor;
            ctx.strokeStyle = textColor;
            ctx.fillText(commit.des, pos + hintDur, sliderHeight / 2 + hintDur);
            ctx.stroke();
            ctx.strokeStyle = "transparent";
        }
    }

    static calculateDistance(n, r, dur) {
        return 2 * (n + 1) * r + dur * n;
    }

    static calculateDuring(dur, r) {
        return dur + r * 2;
    }

    static calculatePos(r) {
        return r * (1.73 / 2);
    }

    render() {
        return (
            <div style={{width: this.props.sliderWidth, height: this.props.sliderHeight, overflow: 'auto'}}>
                <canvas
                    width={`${RepoCommits.calculateDistance(this.props.commits.length, this.props.sliderHeight / r_radio, this.props.during)}`}
                    height={`${this.props.sliderHeight}`}
                    ref="canvas"/>
            </div>
        );
    }
}