import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

interface Props {
    className: string;
    label: string;
    noText?: boolean | undefined;
    large?: boolean | undefined;
    theme?: string | undefined;
}
function toCamelCase(Str: string) {
    return Str.replace(/^([A-Z])|\s(\w)/g, function (match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();
    });
}

const SwitchToggle = ({ className, label, ...props }: any) => {
    const id = toCamelCase(label);

    const [onOff, setOnOff] = useState<boolean>(false);

    const switchClass = useMemo(() => {
        let Class = className;
        if (props.large) Class += ' switch--large';
        if (props.noText) Class += ' switch--no-text';
        if (props.theme === 'success') Class += ' switch--success';
        return Class;
    }, [props]);

    return (
        <Switch>
            <switch
                aria-label={label}
                className={switchClass}
                onClick={() => {
                    setOnOff((f) => !f);
                    if (props.onClick) props.onClick(onOff);
                }}
            >
                <label className="switch__label" htmlFor={id}>
                    <input
                        role="switch"
                        type="checkbox"
                        className="switch__input"
                        id={id}
                    />
                    <span
                        className="switch__text"
                        data-on="ON"
                        data-off="OFF"
                    />
                    <span className="switch__handle" />
                </label>
            </switch>
        </Switch>
    );
};

const Switch = styled.div`
    display: block;
    position: relative;
    margin-right: 30px;
    .switch {
        background-color: transparent;
        box-sizing: border-box;
        display: flex;
        flex: 0 0 auto;
        height: 24px;
        margin: 0 0 10px;
        overflow: hidden;
        padding: 0;
        position: relative;
        width: 56px;

        &__label {
            cursor: pointer;
            margin: 0;
            padding: 0;
            width: 100%;
        }

        &__input {
            opacity: 0;

            &:checked {
                ~ .switch__text {
                    background: #0090bb;

                    &:before {
                        opacity: 0;
                        transform: translateX(200%);
                    }

                    &:after {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                ~ .switch__handle {
                    transform: translateX(32px);
                }
            }
        }

        &__text {
            background-color: #e5e5e5;
            border-radius: 50px;
            box-sizing: border-box;
            display: block;
            flex: 0 0 auto;
            height: 24px;
            margin: 0;
            position: absolute;
            top: 0;
            width: 56px;

            &:before,
            &:after {
                color: SlateGrey;
                font-size: 12px;
                font-weight: 700;
                line-height: 25px;
                position: absolute;
                transition: all 0.2s ease-in-out;
                transition-property: transform;
            }

            &:before {
                content: attr(data-off);
                right: 8px;
                transform: translateX(0);
            }

            &:after {
                color: white;
                content: attr(data-on);
                left: 9px;
                opacity: 0;
                transform: translateX(-200%);
            }
        }

        &__handle {
            background-color: white;
            border-radius: 18px;
            display: block;
            height: 20px;
            margin: 2px;
            padding: 0;
            position: absolute;
            top: 0;
            transition: all 0.2s ease-in-out;
            transition-property: transform;
            width: 20px;
        }

        &--large {
            height: 30px;
            width: 70px;

            .switch__input {
                &:checked {
                    ~ .switch__handle {
                        transform: translateX(40px);
                    }
                }
            }

            .switch__text {
                height: 30px;
                width: 70px;

                &:before,
                &:after {
                    font-size: 14px;
                    line-height: 30px;
                    position: absolute;
                }

                &:before {
                    right: 10px;
                }

                &:after {
                    left: 12px;
                }
            }

            .switch__handle {
                height: 26px;
                width: 26px;
            }
        }

        &--no-text {
            .switch__text {
                &:before,
                &:after {
                    display: none;
                }
            }
        }

        &--success {
            .switch__input {
                &:checked {
                    ~ .switch__text {
                        background: #5ed37a;
                    }
                }
            }
        }
    }
`;

export default SwitchToggle;
